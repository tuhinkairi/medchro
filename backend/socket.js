import { Server } from "socket.io";
import { sendMail } from "./utils/mailSender.js";
import { mailDecider } from "./utils/maildecider.js";
import { Notification } from "./models/notification.model.js";
import { User } from "./models/user.model.js";

let io;

const initializeSocket = (server) => {
  io = new Server(server);

  io.on("connection", (socket) => {
    socket.on("vital", async (msg) => {
      console.log("Vital: ", msg);
      const req = {
        body: {
          id: msg.id,
          severity: msg.severity,
        },
        socket: {
          socketId: socket.id,
        },
      };

      try {
        // Await the mailDecider function
        const resp = await mailDecider(req);
        console.log("MailDecider response:", resp);

        if (resp === 1) {
          const user = await User.findById(msg.id);
          const notify = await Notification.create({
            id: user._id,
            pulseRate: msg.pulse,
            bp: msg.bp,
            temperature: msg.temperature,
            severity: msg.severity,
          });
          console.log("Notification created:", notify);

          // Now send the email with all the necessary user data
          await sendMail(
            user.email,
            user.firstName,
            msg.severity,
            msg.bp,
            msg.pulse,
            msg.temperature
          );
          console.log(
            `Mail sent to ${user.email} due to ${msg.severity} severity`
          );
        }
      } catch (error) {
        console.error("Error handling vital data:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log("user disconnected:", socket.id);
    });
  });

  return io;
};

export { initializeSocket };

