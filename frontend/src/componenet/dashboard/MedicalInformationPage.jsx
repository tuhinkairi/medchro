import React from 'react';

function MedicalInformationPage() {
  return (
    <div className="container mx-auto px-4 py-8 font-subheadingFont">
      <h1 className="text-3xl font-bold text-center mb-8">Heart Disease</h1>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="text-gray-700">
          Heart disease is a broad term that encompasses a number of conditions that affect the heart and blood vessels.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Symptoms</h2>
        <ul className="list-disc list-inside">
          <li className="text-gray-700">Chest pain or discomfort</li>
          <li className="text-gray-700">Shortness of breath</li>
          <li className="text-gray-700">Fatigue</li>
          <li className="text-gray-700">Heart palpitations</li>
          <li className="text-gray-700">Lightheadedness or dizziness</li>
          <li className="text-gray-700">Sweating</li>
          <li className="text-gray-700">Nausea or vomiting</li>
          <li className="text-gray-700">Pain in the jaw, neck, shoulder, or back</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Causes</h2>
        <p className="text-gray-700">
          Heart disease is often caused by a buildup of plaque in the arteries, which can lead to coronary artery disease. Other risk factors include high blood pressure, high cholesterol, smoking, diabetes, obesity, and a family history of heart disease.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Treatments</h2>
        <p className="text-gray-700">
          Treatment for heart disease depends on the specific condition and its severity. It may include lifestyle changes, medications, or surgery.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Prevention</h2>
        <p className="text-gray-700">
          You can reduce your risk of heart disease by making healthy lifestyle choices, such as eating a balanced diet, exercising regularly, maintaining a healthy weight, and not smoking.
        </p>
      </div>
    </div>
  );
}

export default MedicalInformationPage;