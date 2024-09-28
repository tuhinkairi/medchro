const severityMap = new Map();

export const mailDecider = async (req) => {
  const { id, severity } = req.body;
  console.log(id);
  console.log(severity);

  let resp;
  if (!severityMap.has(id)) {
    severityMap.set(id, { count: 0, lastSeverity: null });
  }

  const userSeverityData = severityMap.get(id);
  console.log(userSeverityData);

  if (severity === "mediocre" && userSeverityData.lastSeverity === severity) {
    // Increment the count if the current severity is the same as the last one
    userSeverityData.count += 1;
  } else if (
    severity === "mediocre" &&
    userSeverityData.lastSeverity !== severity
  ) {
    // Reset the count and set the lastSeverity to the current one
    userSeverityData.count = 1;
    userSeverityData.lastSeverity = severity;
  } else if (severity === "chronic") {
    // Immediately send an email for 'chronic' severity
    userSeverityData.count = 1;
    userSeverityData.lastSeverity = severity;
    severityMap.set(id, userSeverityData);
    resp = 1;
    return resp; // Indicate that an email should be sent immediately
  } else {
    // Reset count if severity is different
    userSeverityData.lastSeverity = severity;
    userSeverityData.count = 0;
  }

  // Update the map with the current severity data
  severityMap.set(id, userSeverityData);

  console.log(severityMap);
  console.log(userSeverityData);

  // If the count reaches 5, indicate that an email should be sent
  if (userSeverityData.count === 5) {
    userSeverityData.count = 0; // Reset the count after reaching 5
    resp = 1;
    return resp; // Indicate that an email should be sent
  }

  resp = 0;
  return resp; // Indicate that no email should be sent
};
