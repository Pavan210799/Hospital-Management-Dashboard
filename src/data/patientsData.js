const patientsData = [
  {
    id: "MCP001",
    name: "Ramesh Kumar",
    age: 58,
    gender: "Male",
    disease: "Coronary Artery Disease",
    doctorId: "MCD003",
    doctorName: "Dr. Nisha Mehta",
    history: [
      {
        id: 1,
        date: "2026-01-18",
        diagnosis:
          "Patient reported frequent chest discomfort during physical activity. ECG changes suggested coronary artery disease.",
        medicines: [
          "Aspirin 75mg",
          "Atorvastatin 20mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-09",
        diagnosis:
          "Symptoms reduced after medication. Blood pressure remained stable with improved cholesterol levels.",
        medicines: [
          "Aspirin 75mg",
          "Atorvastatin 20mg",
          "Metoprolol 25mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-21",
        diagnosis:
          "Condition remained stable with no recent chest pain. Advised regular exercise and follow-up after three months.",
        medicines: [
          "Aspirin 75mg",
          "Atorvastatin 20mg",
          "Metoprolol 25mg",
        ],
      },
    ],
  },
  {
    id: "MCP002",
    name: "Priyanka Sharma",
    age: 47,
    gender: "Female",
    disease: "Hypertension",
    doctorId: "MCD001",
    doctorName: "Dr. Arjun Reddy",
    history: [
      {
        id: 1,
        date: "2026-02-05",
        diagnosis:
          "Presented with persistent high blood pressure and headaches. Lifestyle modifications were advised.",
        medicines: [
          "Amlodipine 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-28",
        diagnosis:
          "Blood pressure improved but remained above target. Medication dosage was adjusted.",
        medicines: [
          "Amlodipine 10mg",
          "Telmisartan 40mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-10",
        diagnosis:
          "Blood pressure remained well controlled. Continue medication and maintain a low-sodium diet.",
        medicines: [
          "Amlodipine 10mg",
          "Telmisartan 40mg",
        ],
      },
    ],
  },
  {
    id: "MCP003",
    name: "Vikram Singh",
    age: 63,
    gender: "Male",
    disease: "Heart Failure",
    doctorId: "MCD004",
    doctorName: "Dr. Aditya Varma",
    history: [
      {
        id: 1,
        date: "2026-01-30",
        diagnosis:
          "Complained of shortness of breath and ankle swelling. Initial evaluation suggested heart failure.",
        medicines: [
          "Furosemide 40mg",
          "Ramipril 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-22",
        diagnosis:
          "Breathing improved after treatment. Fluid retention significantly reduced on examination.",
        medicines: [
          "Furosemide 40mg",
          "Ramipril 5mg",
          "Bisoprolol 5mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-18",
        diagnosis:
          "Symptoms remained controlled with medication. Advised regular cardiac monitoring and dietary compliance.",
        medicines: [
          "Furosemide 40mg",
          "Ramipril 5mg",
          "Bisoprolol 5mg",
        ],
      },
    ],
  },
  {
    id: "MCP004",
    name: "Sneha Verma",
    age: 52,
    gender: "Female",
    disease: "Arrhythmia",
    doctorId: "MCD002",
    doctorName: "Dr. Vikram Rao",
    history: [
      {
        id: 1,
        date: "2026-02-12",
        diagnosis:
          "Experienced irregular heartbeat with occasional dizziness. ECG confirmed intermittent arrhythmia.",
        medicines: [
          "Bisoprolol 2.5mg",
        ],
      },
      {
        id: 2,
        date: "2026-04-02",
        diagnosis:
          "Episodes became less frequent after medication. Heart rhythm showed noticeable improvement.",
        medicines: [
          "Bisoprolol 5mg",
          "Apixaban 5mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-24",
        diagnosis:
          "Heart rhythm remained stable with no recent palpitations. Continue treatment and periodic ECG review.",
        medicines: [
          "Bisoprolol 5mg",
          "Apixaban 5mg",
        ],
      },
    ],
  },
    {
    id: "MCP005",
    name: "Suresh Reddy",
    age: 49,
    gender: "Male",
    disease: "Angina",
    doctorId: "MCD001",
    doctorName: "Dr. Arjun Reddy",
    history: [
      {
        id: 1,
        date: "2026-01-22",
        diagnosis:
          "Reported chest tightness while climbing stairs. Clinical findings suggested stable angina.",
        medicines: [
          "Aspirin 75mg",
          "Nitroglycerin 0.5mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-14",
        diagnosis:
          "Chest pain episodes reduced after medication. Blood pressure remained within normal limits.",
        medicines: [
          "Aspirin 75mg",
          "Nitroglycerin 0.5mg",
          "Atorvastatin 20mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-05",
        diagnosis:
          "Condition remained stable with no recent angina attacks. Continue medication and regular follow-up.",
        medicines: [
          "Aspirin 75mg",
          "Nitroglycerin 0.5mg",
          "Atorvastatin 20mg",
        ],
      },
    ],
  },
  {
    id: "MCP006",
    name: "Lakshmi Devi",
    age: 61,
    gender: "Female",
    disease: "Heart Valve Disease",
    doctorId: "MCD004",
    doctorName: "Dr. Aditya Varma",
    history: [
      {
        id: 1,
        date: "2026-02-03",
        diagnosis:
          "Complained of fatigue and breathlessness. Echocardiogram revealed moderate mitral valve disease.",
        medicines: [
          "Furosemide 40mg",
          "Warfarin 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-04-11",
        diagnosis:
          "Symptoms improved after treatment. Valve function remained stable on follow-up assessment.",
        medicines: [
          "Furosemide 40mg",
          "Warfarin 5mg",
          "Bisoprolol 5mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-19",
        diagnosis:
          "No worsening symptoms noted. Continue medication and routine echocardiography.",
        medicines: [
          "Furosemide 40mg",
          "Warfarin 5mg",
          "Bisoprolol 5mg",
        ],
      },
    ],
  },
  {
    id: "MCP007",
    name: "Ajay Patel",
    age: 54,
    gender: "Male",
    disease: "High Cholesterol",
    doctorId: "MCD002",
    doctorName: "Dr. Vikram Rao",
    history: [
      {
        id: 1,
        date: "2026-01-27",
        diagnosis:
          "Routine screening showed elevated cholesterol levels. Lifestyle changes were advised.",
        medicines: [
          "Atorvastatin 20mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-25",
        diagnosis:
          "Lipid profile improved after treatment. Continue healthy diet and regular exercise.",
        medicines: [
          "Atorvastatin 20mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-12",
        diagnosis:
          "Cholesterol levels remained controlled. Continue current medication and annual cardiac evaluation.",
        medicines: [
          "Atorvastatin 20mg",
        ],
      },
    ],
  },
  {
    id: "MCP008",
    name: "Nandini Sharma",
    age: 34,
    gender: "Female",
    disease: "Migraine",
    doctorId: "MCD005",
    doctorName: "Dr. Priya Nair",
    history: [
      {
        id: 1,
        date: "2026-02-09",
        diagnosis:
          "Presented with recurrent severe headaches accompanied by light sensitivity. Migraine was diagnosed.",
        medicines: [
          "Sumatriptan 50mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-04-18",
        diagnosis:
          "Frequency of migraine episodes reduced after preventive therapy. Sleep hygiene was reinforced.",
        medicines: [
          "Sumatriptan 50mg",
          "Propranolol 40mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-28",
        diagnosis:
          "Only occasional mild headaches reported. Continue preventive treatment and avoid known triggers.",
        medicines: [
          "Sumatriptan 50mg",
          "Propranolol 40mg",
        ],
      },
    ],
  },
    {
    id: "MCP009",
    name: "Rahul Naidu",
    age: 46,
    gender: "Male",
    disease: "Transient Ischemic Attack",
    doctorId: "MCD007",
    doctorName: "Dr. Rohit Kulkarni",
    history: [
      {
        id: 1,
        date: "2026-01-16",
        diagnosis:
          "Experienced brief weakness in the left arm and slurred speech. Symptoms resolved within an hour.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-07",
        diagnosis:
          "No recurrent neurological symptoms observed. Blood pressure remained under good control.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
          "Atorvastatin 20mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-14",
        diagnosis:
          "Patient remained symptom-free during follow-up. Continue medication and routine neurological review.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
          "Atorvastatin 20mg",
        ],
      },
    ],
  },
  {
    id: "MCP010",
    name: "Pooja Ramesh",
    age: 32,
    gender: "Female",
    disease: "Epilepsy",
    doctorId: "MCD006",
    doctorName: "Dr. Karan Malhotra",
    history: [
      {
        id: 1,
        date: "2026-02-02",
        diagnosis:
          "Reported two generalized seizures within one month. Antiepileptic therapy was initiated.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 2,
        date: "2026-04-09",
        diagnosis:
          "No seizures reported after starting medication. Patient tolerated treatment well.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-21",
        diagnosis:
          "Condition remained stable without breakthrough seizures. Continue medication and regular follow-up.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
    ],
  },
  {
    id: "MCP011",
    name: "Mahesh Babu",
    age: 57,
    gender: "Male",
    disease: "Parkinson's Disease",
    doctorId: "MCD007",
    doctorName: "Dr. Rohit Kulkarni",
    history: [
      {
        id: 1,
        date: "2026-01-28",
        diagnosis:
          "Presented with resting tremors and stiffness affecting daily activities. Parkinson's disease was diagnosed.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-30",
        diagnosis:
          "Tremors reduced after treatment. Mobility improved with regular physiotherapy.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-17",
        diagnosis:
          "Symptoms remained well controlled with medication. Continue therapy and neurological monitoring.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
    ],
  },
  {
    id: "MCP012",
    name: "Anjali Verma",
    age: 41,
    gender: "Female",
    disease: "Peripheral Neuropathy",
    doctorId: "MCD008",
    doctorName: "Dr. Siddharth Iyer",
    history: [
      {
        id: 1,
        date: "2026-02-14",
        diagnosis:
          "Complained of numbness and tingling in both feet. Clinical findings suggested peripheral neuropathy.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
      {
        id: 2,
        date: "2026-04-20",
        diagnosis:
          "Burning sensation reduced after medication. Sensory symptoms improved gradually.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
      {
        id: 3,
        date: "2026-06-26",
        diagnosis:
          "Patient reported significant improvement in daily activities. Continue medication and physiotherapy.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
    ],
  },
    {
    id: "MCP013",
    name: "Kiran Chandra",
    age: 53,
    gender: "Male",
    disease: "Stroke",
    doctorId: "MCD005",
    doctorName: "Dr. Priya Nair",
    history: [
      {
        id: 1,
        date: "2026-01-11",
        diagnosis:
          "Patient presented with sudden weakness on the right side and difficulty speaking. Immediate treatment was initiated.",
        medicines: [
          "Aspirin 75mg",
          "Atorvastatin 40mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-08",
        diagnosis:
          "Speech improved with rehabilitation while mild weakness persisted. Continued physiotherapy was advised.",
        medicines: [
          "Aspirin 75mg",
          "Atorvastatin 40mg",
          "Clopidogrel 75mg",
        ],
      },
      {
        id: 3,
        date: "2026-04-19",
        diagnosis:
          "Mobility improved significantly with regular exercises. No new neurological deficits were observed.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
          "Atorvastatin 40mg",
        ],
      },
      {
        id: 4,
        date: "2026-06-22",
        diagnosis:
          "Patient remained clinically stable with good recovery. Continue medication and routine neurological follow-up.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
          "Atorvastatin 40mg",
        ],
      },
    ],
  },
  {
    id: "MCP014",
    name: "Deepika Rao",
    age: 28,
    gender: "Female",
    disease: "Migraine",
    doctorId: "MCD008",
    doctorName: "Dr. Siddharth Iyer",
    history: [
      {
        id: 1,
        date: "2026-02-03",
        diagnosis:
          "Complained of severe throbbing headaches with nausea occurring several times each month.",
        medicines: [
          "Sumatriptan 50mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-18",
        diagnosis:
          "Frequency of migraine attacks reduced after preventive medication. Stress management techniques were discussed.",
        medicines: [
          "Sumatriptan 50mg",
          "Propranolol 40mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-09",
        diagnosis:
          "Only one mild episode reported since the previous visit. Continue preventive therapy.",
        medicines: [
          "Sumatriptan 50mg",
          "Propranolol 40mg",
        ],
      },
    ],
  },
  {
    id: "MCP015",
    name: "Sanjana Kulkarni",
    age: 44,
    gender: "Female",
    disease: "Cardiac Arrhythmia",
    doctorId: "MCD003",
    doctorName: "Dr. Nisha Mehta",
    history: [
      {
        id: 1,
        date: "2026-01-20",
        diagnosis:
          "Experienced irregular heartbeat and dizziness during routine activities. ECG confirmed arrhythmia.",
        medicines: [
          "Bisoprolol 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-15",
        diagnosis:
          "Palpitations became less frequent after treatment. Heart rate remained stable during examination.",
        medicines: [
          "Bisoprolol 5mg",
          "Apixaban 5mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-28",
        diagnosis:
          "Patient reported improved exercise tolerance with no recent episodes of dizziness.",
        medicines: [
          "Bisoprolol 5mg",
          "Apixaban 5mg",
        ],
      },
      {
        id: 4,
        date: "2026-06-30",
        diagnosis:
          "Cardiac rhythm remained stable. Continue medication and routine ECG monitoring.",
        medicines: [
          "Bisoprolol 5mg",
          "Apixaban 5mg",
        ],
      },
    ],
  },
  {
    id: "MCP016",
    name: "Ganesh Prasad",
    age: 60,
    gender: "Male",
    disease: "Epilepsy",
    doctorId: "MCD006",
    doctorName: "Dr. Karan Malhotra",
    history: [
      {
        id: 1,
        date: "2026-01-07",
        diagnosis:
          "Patient experienced recurrent generalized seizures over the past month. Antiepileptic medication was started.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-26",
        diagnosis:
          "No seizure episodes reported after starting treatment. Medication compliance was satisfactory.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 3,
        date: "2026-04-30",
        diagnosis:
          "Patient remained seizure-free with no significant medication side effects.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 4,
        date: "2026-06-25",
        diagnosis:
          "Neurological examination was stable. Continue medication and avoid seizure triggers.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 5,
        date: "2026-07-28",
        diagnosis:
          "Condition remained well controlled. Follow-up scheduled after three months.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
    ],
  },
    {
    id: "MCP017",
    name: "Rohini Desai",
    age: 55,
    gender: "Female",
    disease: "Coronary Artery Disease",
    doctorId: "MCD001",
    doctorName: "Dr. Arjun Reddy",
    history: [
      {
        id: 1,
        date: "2026-01-14",
        diagnosis:
          "Reported chest discomfort during brisk walking. ECG and stress test indicated coronary artery disease.",
        medicines: [
          "Aspirin 75mg",
          "Atorvastatin 20mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-02",
        diagnosis:
          "Symptoms improved after treatment with no recent chest pain. Cholesterol levels showed improvement.",
        medicines: [
          "Aspirin 75mg",
          "Atorvastatin 20mg",
          "Metoprolol 25mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-18",
        diagnosis:
          "Patient remained stable and tolerated daily activities well. Continue medication and heart-healthy diet.",
        medicines: [
          "Aspirin 75mg",
          "Atorvastatin 20mg",
          "Metoprolol 25mg",
        ],
      },
    ],
  },
  {
    id: "MCP018",
    name: "Arvind Shetty",
    age: 37,
    gender: "Male",
    disease: "Multiple Sclerosis",
    doctorId: "MCD008",
    doctorName: "Dr. Siddharth Iyer",
    history: [
      {
        id: 1,
        date: "2026-01-29",
        diagnosis:
          "Patient reported numbness in the right arm with occasional blurred vision. MRI findings supported multiple sclerosis.",
        medicines: [
          "Methylprednisolone",
          "Vitamin D3",
        ],
      },
      {
        id: 2,
        date: "2026-03-27",
        diagnosis:
          "Symptoms improved after corticosteroid therapy. No new neurological complaints were noted.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
      {
        id: 3,
        date: "2026-05-22",
        diagnosis:
          "Condition remained stable with good mobility. Continue disease-modifying treatment.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-07-01",
        diagnosis:
          "Follow-up MRI showed no significant disease progression. Regular monitoring advised.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP019",
    name: "Keerthana Reddy",
    age: 30,
    gender: "Female",
    disease: "Chronic Migraine",
    doctorId: "MCD005",
    doctorName: "Dr. Priya Nair",
    history: [
      {
        id: 1,
        date: "2026-02-11",
        diagnosis:
          "Complained of severe headaches occurring several times every month with nausea and light sensitivity.",
        medicines: [
          "Sumatriptan 50mg",
          "Naproxen 250mg",
        ],
      },
      {
        id: 2,
        date: "2026-04-01",
        diagnosis:
          "Migraine frequency reduced after preventive therapy. Sleep schedule was also improved.",
        medicines: [
          "Sumatriptan 50mg",
          "Propranolol 40mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-16",
        diagnosis:
          "Only occasional mild headaches reported. Continue preventive medication and hydration.",
        medicines: [
          "Propranolol 40mg",
          "Sumatriptan 50mg",
        ],
      },
    ],
  },
  {
    id: "MCP020",
    name: "Venkatesh Rao",
    age: 64,
    gender: "Male",
    disease: "Heart Failure",
    doctorId: "MCD004",
    doctorName: "Dr. Aditya Varma",
    history: [
      {
        id: 1,
        date: "2026-01-10",
        diagnosis:
          "Presented with breathlessness, fatigue, and swelling in both legs. Clinical findings suggested heart failure.",
        medicines: [
          "Furosemide 40mg",
          "Ramipril 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-21",
        diagnosis:
          "Shortness of breath reduced after treatment. Fluid retention improved considerably.",
        medicines: [
          "Furosemide 40mg",
          "Ramipril 5mg",
          "Bisoprolol 5mg",
        ],
      },
      {
        id: 3,
        date: "2026-04-12",
        diagnosis:
          "Cardiac function remained stable with improved exercise tolerance during follow-up.",
        medicines: [
          "Furosemide 40mg",
          "Ramipril 5mg",
          "Bisoprolol 5mg",
        ],
      },
      {
        id: 4,
        date: "2026-06-27",
        diagnosis:
          "No worsening symptoms observed. Continue medication and restrict dietary sodium intake.",
        medicines: [
          "Furosemide 40mg",
          "Ramipril 5mg",
          "Bisoprolol 5mg",
        ],
      },
      {
        id: 5,
        date: "2026-07-30",
        diagnosis:
          "Patient remained clinically stable with good medication compliance. Next review scheduled after three months.",
        medicines: [
          "Furosemide 40mg",
          "Ramipril 5mg",
          "Bisoprolol 5mg",
        ],
      },
    ],
  },
    {
    id: "MCP021",
    name: "Harish Yadav",
    age: 51,
    gender: "Male",
    disease: "Atrial Fibrillation",
    doctorId: "MCD002",
    doctorName: "Dr. Vikram Rao",
    history: [
      {
        id: 1,
        date: "2026-01-24",
        diagnosis:
          "Patient experienced palpitations and occasional dizziness. ECG confirmed atrial fibrillation.",
        medicines: [
          "Bisoprolol 5mg",
          "Apixaban 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-19",
        diagnosis:
          "Heart rate remained controlled with medication. No recent episodes of severe palpitations.",
        medicines: [
          "Bisoprolol 5mg",
          "Apixaban 5mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-31",
        diagnosis:
          "Condition remained stable with regular medication. Routine ECG monitoring was advised.",
        medicines: [
          "Bisoprolol 5mg",
          "Apixaban 5mg",
        ],
      },
    ],
  },
  {
    id: "MCP022",
    name: "Neha Agarwal",
    age: 48,
    gender: "Female",
    disease: "Heart Valve Disease",
    doctorId: "MCD004",
    doctorName: "Dr. Aditya Varma",
    history: [
      {
        id: 1,
        date: "2026-02-06",
        diagnosis:
          "Complained of fatigue and shortness of breath during moderate activity. Echocardiogram showed valve dysfunction.",
        medicines: [
          "Warfarin 5mg",
          "Furosemide 40mg",
        ],
      },
      {
        id: 2,
        date: "2026-04-04",
        diagnosis:
          "Symptoms improved with treatment and regular monitoring. Valve function remained unchanged.",
        medicines: [
          "Warfarin 5mg",
          "Bisoprolol 5mg",
          "Furosemide 40mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-18",
        diagnosis:
          "Patient remained clinically stable. Continue medication and periodic echocardiography.",
        medicines: [
          "Warfarin 5mg",
          "Bisoprolol 5mg",
          "Furosemide 40mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-25",
        diagnosis:
          "No worsening symptoms reported. Routine follow-up scheduled after three months.",
        medicines: [
          "Warfarin 5mg",
          "Bisoprolol 5mg",
          "Furosemide 40mg",
        ],
      },
    ],
  },
  {
    id: "MCP023",
    name: "Bhavana Joshi",
    age: 39,
    gender: "Female",
    disease: "Seizure Disorder",
    doctorId: "MCD006",
    doctorName: "Dr. Karan Malhotra",
    history: [
      {
        id: 1,
        date: "2026-01-30",
        diagnosis:
          "Experienced two seizure episodes within three weeks. Antiepileptic therapy was initiated.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-21",
        diagnosis:
          "No further seizures were reported after starting treatment. Medication tolerance was good.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-29",
        diagnosis:
          "Patient remained seizure-free and resumed normal daily activities.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-20",
        diagnosis:
          "Neurological examination remained stable. Continue medication and regular follow-up.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
    ],
  },
  {
    id: "MCP024",
    name: "Prakash Menon",
    age: 59,
    gender: "Male",
    disease: "Parkinson's Disease",
    doctorId: "MCD007",
    doctorName: "Dr. Rohit Kulkarni",
    history: [
      {
        id: 1,
        date: "2026-01-12",
        diagnosis:
          "Presented with resting tremors and muscle rigidity affecting routine activities.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-28",
        diagnosis:
          "Tremors reduced with treatment and physiotherapy. Walking ability improved gradually.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 3,
        date: "2026-04-25",
        diagnosis:
          "Motor symptoms remained well controlled. Continue medication and regular exercise.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 4,
        date: "2026-06-15",
        diagnosis:
          "Patient remained stable with no progression of symptoms during follow-up.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 5,
        date: "2026-07-29",
        diagnosis:
          "Mobility remained satisfactory. Continue treatment and periodic neurological assessment.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
    ],
  },
    {
    id: "MCP025",
    name: "Divya Srinivas",
    age: 43,
    gender: "Female",
    disease: "Coronary Artery Disease",
    doctorId: "MCD003",
    doctorName: "Dr. Nisha Mehta",
    history: [
      {
        id: 1,
        date: "2026-01-17",
        diagnosis:
          "Patient complained of chest discomfort during exertion. Initial evaluation indicated coronary artery disease.",
        medicines: [
          "Aspirin 75mg",
          "Atorvastatin 20mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-12",
        diagnosis:
          "Symptoms reduced after medication with improved lipid profile. Continue lifestyle modifications.",
        medicines: [
          "Aspirin 75mg",
          "Atorvastatin 20mg",
          "Metoprolol 25mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-26",
        diagnosis:
          "Patient remained symptom-free during routine activities. Continue medication and scheduled follow-up.",
        medicines: [
          "Aspirin 75mg",
          "Atorvastatin 20mg",
          "Metoprolol 25mg",
        ],
      },
    ],
  },
  {
    id: "MCP026",
    name: "Karthik Ramesh",
    age: 56,
    gender: "Male",
    disease: "Hypertension",
    doctorId: "MCD001",
    doctorName: "Dr. Arjun Reddy",
    history: [
      {
        id: 1,
        date: "2026-02-01",
        diagnosis:
          "Presented with persistently elevated blood pressure and morning headaches. Antihypertensive therapy was initiated.",
        medicines: [
          "Telmisartan 40mg",
          "Amlodipine 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-29",
        diagnosis:
          "Blood pressure improved but remained slightly above target. Medication dosage was adjusted.",
        medicines: [
          "Telmisartan 40mg",
          "Amlodipine 10mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-08",
        diagnosis:
          "Blood pressure remained well controlled. Continue medication with regular home monitoring.",
        medicines: [
          "Telmisartan 40mg",
          "Amlodipine 10mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-24",
        diagnosis:
          "Patient maintained stable readings and reported improved overall health.",
        medicines: [
          "Telmisartan 40mg",
          "Amlodipine 10mg",
        ],
      },
    ],
  },
  {
    id: "MCP027",
    name: "Meghana Patel",
    age: 35,
    gender: "Female",
    disease: "Cardiomyopathy",
    doctorId: "MCD004",
    doctorName: "Dr. Aditya Varma",
    history: [
      {
        id: 1,
        date: "2026-01-21",
        diagnosis:
          "Complained of fatigue and breathlessness on exertion. Echocardiogram suggested dilated cardiomyopathy.",
        medicines: [
          "Ramipril 5mg",
          "Bisoprolol 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-04-08",
        diagnosis:
          "Exercise tolerance improved with medication. Cardiac function remained stable.",
        medicines: [
          "Ramipril 5mg",
          "Bisoprolol 5mg",
          "Furosemide 20mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-20",
        diagnosis:
          "No worsening symptoms reported. Continue medication and routine cardiac evaluation.",
        medicines: [
          "Ramipril 5mg",
          "Bisoprolol 5mg",
          "Furosemide 20mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-31",
        diagnosis:
          "Condition remained clinically stable with good medication compliance.",
        medicines: [
          "Ramipril 5mg",
          "Bisoprolol 5mg",
          "Furosemide 20mg",
        ],
      },
    ],
  },
  {
    id: "MCP028",
    name: "Ravi Kulkarni",
    age: 62,
    gender: "Male",
    disease: "Stable Angina",
    doctorId: "MCD002",
    doctorName: "Dr. Vikram Rao",
    history: [
      {
        id: 1,
        date: "2026-01-09",
        diagnosis:
          "Reported chest pain during brisk walking that subsided with rest. Stable angina was diagnosed.",
        medicines: [
          "Nitroglycerin 0.5mg",
          "Aspirin 75mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-27",
        diagnosis:
          "Frequency of angina episodes reduced after treatment. Lipid levels showed improvement.",
        medicines: [
          "Nitroglycerin 0.5mg",
          "Aspirin 75mg",
          "Rosuvastatin 20mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-05",
        diagnosis:
          "Patient reported only occasional mild discomfort during heavy exertion. Continue medication.",
        medicines: [
          "Nitroglycerin 0.5mg",
          "Aspirin 75mg",
          "Rosuvastatin 20mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-18",
        diagnosis:
          "Condition remained stable with no recent severe angina episodes. Follow-up advised after three months.",
        medicines: [
          "Nitroglycerin 0.5mg",
          "Aspirin 75mg",
          "Rosuvastatin 20mg",
        ],
      },
      {
        id: 5,
        date: "2026-08-01",
        diagnosis:
          "Routine review showed stable cardiac status. Continue current treatment plan.",
        medicines: [
          "Nitroglycerin 0.5mg",
          "Aspirin 75mg",
          "Rosuvastatin 20mg",
        ],
      },
    ],
  },
    {
    id: "MCP029",
    name: "Anil Kumar",
    age: 52,
    gender: "Male",
    disease: "Stroke",
    doctorId: "MCD007",
    doctorName: "Dr. Rohit Kulkarni",
    history: [
      {
        id: 1,
        date: "2026-01-13",
        diagnosis:
          "Presented with sudden weakness on the left side and slurred speech. Acute stroke management was initiated.",
        medicines: [
          "Aspirin 75mg",
          "Atorvastatin 40mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-24",
        diagnosis:
          "Speech improved with rehabilitation while mild weakness persisted. Physiotherapy was continued.",
        medicines: [
          "Aspirin 75mg",
          "Atorvastatin 40mg",
          "Clopidogrel 75mg",
        ],
      },
      {
        id: 3,
        date: "2026-04-28",
        diagnosis:
          "Patient regained good limb strength with no new neurological symptoms.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
          "Atorvastatin 40mg",
        ],
      },
      {
        id: 4,
        date: "2026-06-29",
        diagnosis:
          "Recovery remained satisfactory. Continue medication and neurological follow-up.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
          "Atorvastatin 40mg",
        ],
      },
    ],
  },
  {
    id: "MCP030",
    name: "Shalini Verma",
    age: 33,
    gender: "Female",
    disease: "Migraine",
    doctorId: "MCD005",
    doctorName: "Dr. Priya Nair",
    history: [
      {
        id: 1,
        date: "2026-02-08",
        diagnosis:
          "Complained of recurrent throbbing headaches with nausea and sensitivity to light.",
        medicines: [
          "Sumatriptan 50mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-30",
        diagnosis:
          "Migraine frequency reduced after preventive therapy. Lifestyle modifications were reinforced.",
        medicines: [
          "Sumatriptan 50mg",
          "Propranolol 40mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-11",
        diagnosis:
          "Only one mild migraine episode reported since the previous review.",
        medicines: [
          "Propranolol 40mg",
          "Sumatriptan 50mg",
        ],
      },
    ],
  },
  {
    id: "MCP031",
    name: "Dinesh Naik",
    age: 61,
    gender: "Male",
    disease: "Parkinson's Disease",
    doctorId: "MCD008",
    doctorName: "Dr. Siddharth Iyer",
    history: [
      {
        id: 1,
        date: "2026-01-18",
        diagnosis:
          "Presented with resting tremors and muscle stiffness affecting routine activities.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-12",
        diagnosis:
          "Motor symptoms improved with medication and regular physiotherapy sessions.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-23",
        diagnosis:
          "Mobility remained stable with no significant progression of symptoms.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-16",
        diagnosis:
          "Patient continued daily activities independently. Continue medication and exercise.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 5,
        date: "2026-08-02",
        diagnosis:
          "Neurological status remained stable during routine follow-up.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
    ],
  },
  {
    id: "MCP032",
    name: "Kavitha Menon",
    age: 45,
    gender: "Female",
    disease: "Epilepsy",
    doctorId: "MCD006",
    doctorName: "Dr. Karan Malhotra",
    history: [
      {
        id: 1,
        date: "2026-01-25",
        diagnosis:
          "Reported recurrent generalized seizures over the previous month. Antiepileptic treatment was initiated.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-20",
        diagnosis:
          "No breakthrough seizures observed after starting medication. Patient tolerated treatment well.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-27",
        diagnosis:
          "Condition remained well controlled with good medication compliance.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-30",
        diagnosis:
          "Neurological examination remained stable. Continue medication and avoid seizure triggers.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
    ],
  },
    {
    id: "MCP033",
    name: "Sowmya Reddy",
    age: 41,
    gender: "Female",
    disease: "Bell's Palsy",
    doctorId: "MCD005",
    doctorName: "Dr. Priya Nair",
    history: [
      {
        id: 1,
        date: "2026-01-19",
        diagnosis:
          "Patient developed sudden weakness on the right side of the face with difficulty closing the eye.",
        medicines: [
          "Prednisolone 50mg",
          "Artificial Tears",
        ],
      },
      {
        id: 2,
        date: "2026-03-01",
        diagnosis:
          "Facial muscle strength improved considerably with medication and facial exercises.",
        medicines: [
          "Prednisolone 20mg",
          "Artificial Tears",
        ],
      },
      {
        id: 3,
        date: "2026-05-14",
        diagnosis:
          "Nearly complete recovery achieved with only mild residual weakness during smiling.",
        medicines: [
          "Vitamin B Complex",
        ],
      },
    ],
  },
  {
    id: "MCP034",
    name: "Rakesh Gupta",
    age: 58,
    gender: "Male",
    disease: "Essential Tremor",
    doctorId: "MCD007",
    doctorName: "Dr. Rohit Kulkarni",
    history: [
      {
        id: 1,
        date: "2026-01-08",
        diagnosis:
          "Complained of hand tremors affecting writing and eating. Essential tremor was diagnosed.",
        medicines: [
          "Propranolol 40mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-26",
        diagnosis:
          "Noticeable reduction in tremor intensity after treatment. Daily activities became easier.",
        medicines: [
          "Propranolol 40mg",
          "Primidone 50mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-09",
        diagnosis:
          "Symptoms remained stable with improved hand control. Continue current medication.",
        medicines: [
          "Propranolol 40mg",
          "Primidone 50mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-18",
        diagnosis:
          "No progression of tremors noted during examination. Routine follow-up advised.",
        medicines: [
          "Propranolol 40mg",
          "Primidone 50mg",
        ],
      },
    ],
  },
  {
    id: "MCP035",
    name: "Bhavya Nair",
    age: 29,
    gender: "Female",
    disease: "Trigeminal Neuralgia",
    doctorId: "MCD006",
    doctorName: "Dr. Karan Malhotra",
    history: [
      {
        id: 1,
        date: "2026-02-04",
        diagnosis:
          "Experienced sudden electric shock-like facial pain triggered while chewing food.",
        medicines: [
          "Carbamazepine 200mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-22",
        diagnosis:
          "Facial pain episodes reduced significantly after starting anticonvulsant therapy.",
        medicines: [
          "Carbamazepine 200mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-02",
        diagnosis:
          "Patient reported only occasional mild discomfort. Continue medication and observation.",
        medicines: [
          "Carbamazepine 200mg",
        ],
      },
    ],
  },
  {
    id: "MCP036",
    name: "Vijay Kumar",
    age: 54,
    gender: "Male",
    disease: "Peripheral Neuropathy",
    doctorId: "MCD008",
    doctorName: "Dr. Siddharth Iyer",
    history: [
      {
        id: 1,
        date: "2026-01-15",
        diagnosis:
          "Reported numbness and burning sensation in both feet, especially during the night.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
      {
        id: 2,
        date: "2026-03-10",
        diagnosis:
          "Burning sensation reduced after medication with gradual improvement in sensation.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
      {
        id: 3,
        date: "2026-05-28",
        diagnosis:
          "Patient reported improved walking comfort with no worsening neurological symptoms.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
      {
        id: 4,
        date: "2026-07-26",
        diagnosis:
          "Neurological examination remained stable. Continue treatment and regular foot care.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
      {
        id: 5,
        date: "2026-08-04",
        diagnosis:
          "Symptoms remained well controlled with good medication adherence.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
    ],
  },
    {
    id: "MCP037",
    name: "Nikhil Sharma",
    age: 47,
    gender: "Male",
    disease: "Cervical Dystonia",
    doctorId: "MCD007",
    doctorName: "Dr. Rohit Kulkarni",
    history: [
      {
        id: 1,
        date: "2026-01-09",
        diagnosis:
          "Patient reported involuntary neck muscle contractions causing abnormal head posture and discomfort.",
        medicines: [
          "Baclofen 10mg",
          "Ibuprofen 400mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-04",
        diagnosis:
          "Muscle stiffness reduced after medication and physiotherapy. Daily activities became easier.",
        medicines: [
          "Baclofen 10mg",
          "Botulinum Toxin Injection",
        ],
      },
      {
        id: 3,
        date: "2026-05-20",
        diagnosis:
          "Neck movements improved with only occasional spasms. Continue treatment and stretching exercises.",
        medicines: [
          "Baclofen 10mg",
          "Botulinum Toxin Injection",
        ],
      },
    ],
  },
  {
    id: "MCP038",
    name: "Aparna Rao",
    age: 36,
    gender: "Female",
    disease: "Multiple Sclerosis",
    doctorId: "MCD008",
    doctorName: "Dr. Siddharth Iyer",
    history: [
      {
        id: 1,
        date: "2026-01-23",
        diagnosis:
          "Patient experienced blurred vision and numbness in the left arm. MRI findings supported multiple sclerosis.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
      {
        id: 2,
        date: "2026-03-18",
        diagnosis:
          "No new neurological symptoms were reported. Mobility and vision improved after treatment.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
      {
        id: 3,
        date: "2026-06-03",
        diagnosis:
          "Condition remained stable with no evidence of relapse. Continue disease-modifying therapy.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-07-29",
        diagnosis:
          "Follow-up MRI showed stable disease without new lesions. Regular neurological review advised.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP039",
    name: "Pradeep Mishra",
    age: 63,
    gender: "Male",
    disease: "Transient Ischemic Attack",
    doctorId: "MCD005",
    doctorName: "Dr. Priya Nair",
    history: [
      {
        id: 1,
        date: "2026-01-12",
        diagnosis:
          "Experienced brief weakness of the left arm and slurred speech lasting less than an hour.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-28",
        diagnosis:
          "No recurrence of neurological symptoms after initiating antiplatelet therapy.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
          "Atorvastatin 20mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-13",
        diagnosis:
          "Patient remained neurologically stable. Continue medication and blood pressure monitoring.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
          "Atorvastatin 20mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-22",
        diagnosis:
          "No further transient episodes reported. Continue preventive therapy and regular follow-up.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
          "Atorvastatin 20mg",
        ],
      },
    ],
  },
  {
    id: "MCP040",
    name: "Sushmita Das",
    age: 31,
    gender: "Female",
    disease: "Myasthenia Gravis",
    doctorId: "MCD006",
    doctorName: "Dr. Karan Malhotra",
    history: [
      {
        id: 1,
        date: "2026-02-02",
        diagnosis:
          "Patient complained of drooping eyelids and muscle weakness that worsened by evening.",
        medicines: [
          "Pyridostigmine 60mg",
          "Prednisolone 20mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-27",
        diagnosis:
          "Muscle strength improved with treatment. Fatigue episodes became less frequent.",
        medicines: [
          "Pyridostigmine 60mg",
          "Prednisolone 10mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-31",
        diagnosis:
          "Patient resumed normal daily activities with minimal muscle weakness. Continue maintenance therapy.",
        medicines: [
          "Pyridostigmine 60mg",
          "Prednisolone 10mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-30",
        diagnosis:
          "Condition remained stable with no significant exacerbations. Routine neurological review advised.",
        medicines: [
          "Pyridostigmine 60mg",
          "Prednisolone 10mg",
        ],
      },
    ],
  },
    {
    id: "MCP041",
    name: "Rohit Choudhary",
    age: 50,
    gender: "Male",
    disease: "Epilepsy",
    doctorId: "MCD006",
    doctorName: "Dr. Karan Malhotra",
    history: [
      {
        id: 1,
        date: "2026-01-06",
        diagnosis:
          "Patient experienced two generalized seizures within three weeks. Antiepileptic treatment was initiated.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-25",
        diagnosis:
          "No seizure episodes reported after starting medication. Sleep hygiene was reinforced.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-07",
        diagnosis:
          "Patient remained seizure-free and tolerated medication without adverse effects.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-24",
        diagnosis:
          "Neurological examination remained stable. Continue medication and avoid seizure triggers.",
        medicines: [
          "Levetiracetam 500mg",
        ],
      },
    ],
  },
  {
    id: "MCP042",
    name: "Vaishnavi Kulkarni",
    age: 38,
    gender: "Female",
    disease: "Peripheral Neuropathy",
    doctorId: "MCD008",
    doctorName: "Dr. Siddharth Iyer",
    history: [
      {
        id: 1,
        date: "2026-01-28",
        diagnosis:
          "Complained of tingling sensation and numbness in both feet, especially at night.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
      {
        id: 2,
        date: "2026-03-16",
        diagnosis:
          "Symptoms improved with medication and vitamin supplementation. Walking became more comfortable.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
      {
        id: 3,
        date: "2026-05-30",
        diagnosis:
          "Only occasional numbness reported. Continue medication and regular exercise.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
    ],
  },
  {
    id: "MCP043",
    name: "Kishore Varma",
    age: 57,
    gender: "Male",
    disease: "Parkinson's Disease",
    doctorId: "MCD007",
    doctorName: "Dr. Rohit Kulkarni",
    history: [
      {
        id: 1,
        date: "2026-01-14",
        diagnosis:
          "Presented with resting tremors, slowed movements, and muscle rigidity affecting daily activities.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-11",
        diagnosis:
          "Motor symptoms improved after treatment and physiotherapy. Tremors became less frequent.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-19",
        diagnosis:
          "Patient maintained good mobility with regular exercise. Continue present treatment plan.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-21",
        diagnosis:
          "Symptoms remained stable without significant progression. Routine follow-up advised.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
      {
        id: 5,
        date: "2026-08-05",
        diagnosis:
          "Clinical condition remained satisfactory. Continue medication and physiotherapy sessions.",
        medicines: [
          "Levodopa 250mg",
          "Carbidopa 25mg",
        ],
      },
    ],
  },
  {
    id: "MCP044",
    name: "Meenakshi Pillai",
    age: 42,
    gender: "Female",
    disease: "Vertigo",
    doctorId: "MCD005",
    doctorName: "Dr. Priya Nair",
    history: [
      {
        id: 1,
        date: "2026-02-10",
        diagnosis:
          "Patient reported spinning sensation associated with sudden head movements and mild nausea.",
        medicines: [
          "Betahistine 16mg",
          "Ondansetron 4mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-31",
        diagnosis:
          "Vertigo episodes reduced after vestibular exercises and medication. Balance improved significantly.",
        medicines: [
          "Betahistine 16mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-17",
        diagnosis:
          "Only occasional mild dizziness reported. Continue vestibular exercises and follow-up if symptoms recur.",
        medicines: [
          "Betahistine 16mg",
        ],
      },
    ],
  },
    {
    id: "MCP045",
    name: "Ashok Menon",
    age: 46,
    gender: "Male",
    disease: "Multiple Sclerosis",
    doctorId: "MCD008",
    doctorName: "Dr. Siddharth Iyer",
    history: [
      {
        id: 1,
        date: "2026-01-17",
        diagnosis:
          "Patient complained of blurred vision and numbness in both legs. MRI findings were suggestive of multiple sclerosis.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
      {
        id: 2,
        date: "2026-03-15",
        diagnosis:
          "Vision improved and limb numbness reduced after treatment. No new neurological symptoms were reported.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
      {
        id: 3,
        date: "2026-05-26",
        diagnosis:
          "Patient remained clinically stable with no evidence of relapse. Continue disease-modifying therapy.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-07-27",
        diagnosis:
          "Follow-up MRI showed stable disease activity. Regular neurological monitoring advised.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP046",
    name: "Harini Rao",
    age: 34,
    gender: "Female",
    disease: "Trigeminal Neuralgia",
    doctorId: "MCD006",
    doctorName: "Dr. Karan Malhotra",
    history: [
      {
        id: 1,
        date: "2026-02-05",
        diagnosis:
          "Experienced sharp facial pain triggered while chewing and speaking. Trigeminal neuralgia was diagnosed.",
        medicines: [
          "Carbamazepine 200mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-28",
        diagnosis:
          "Pain intensity reduced significantly after medication. No severe episodes since the previous visit.",
        medicines: [
          "Carbamazepine 200mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-09",
        diagnosis:
          "Patient remained comfortable with only occasional mild facial pain. Continue current therapy.",
        medicines: [
          "Carbamazepine 200mg",
        ],
      },
    ],
  },
  {
    id: "MCP047",
    name: "Ganesh Kulkarni",
    age: 59,
    gender: "Male",
    disease: "Essential Tremor",
    doctorId: "MCD007",
    doctorName: "Dr. Rohit Kulkarni",
    history: [
      {
        id: 1,
        date: "2026-01-20",
        diagnosis:
          "Patient reported progressive hand tremors interfering with writing and eating.",
        medicines: [
          "Propranolol 40mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-18",
        diagnosis:
          "Tremors reduced after treatment with noticeable improvement in fine motor activities.",
        medicines: [
          "Propranolol 40mg",
          "Primidone 50mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-24",
        diagnosis:
          "Symptoms remained well controlled with medication. Continue regular neurological follow-up.",
        medicines: [
          "Propranolol 40mg",
          "Primidone 50mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-31",
        diagnosis:
          "No progression of tremors observed during examination. Continue current treatment plan.",
        medicines: [
          "Propranolol 40mg",
          "Primidone 50mg",
        ],
      },
    ],
  },
  {
    id: "MCP048",
    name: "Pavithra Iyer",
    age: 40,
    gender: "Female",
    disease: "Bell's Palsy",
    doctorId: "MCD005",
    doctorName: "Dr. Priya Nair",
    history: [
      {
        id: 1,
        date: "2026-01-31",
        diagnosis:
          "Patient developed sudden weakness on the left side of the face with difficulty closing the eye.",
        medicines: [
          "Prednisolone 50mg",
          "Artificial Tears",
        ],
      },
      {
        id: 2,
        date: "2026-03-20",
        diagnosis:
          "Facial symmetry improved considerably after treatment. Eye closure became nearly normal.",
        medicines: [
          "Prednisolone 20mg",
          "Artificial Tears",
        ],
      },
      {
        id: 3,
        date: "2026-05-29",
        diagnosis:
          "Only minimal facial weakness remained. Continue facial exercises for complete recovery.",
        medicines: [
          "Vitamin B Complex",
        ],
      },
      {
        id: 4,
        date: "2026-08-03",
        diagnosis:
          "Patient achieved near-complete recovery with no functional limitations.",
        medicines: [
          "Vitamin B Complex",
        ],
      },
    ],
  },
    {
    id: "MCP049",
    name: "Ramesh Patel",
    age: 55,
    gender: "Male",
    disease: "Myasthenia Gravis",
    doctorId: "MCD008",
    doctorName: "Dr. Siddharth Iyer",
    history: [
      {
        id: 1,
        date: "2026-01-22",
        diagnosis:
          "Patient reported drooping eyelids and muscle weakness that worsened towards the evening.",
        medicines: [
          "Pyridostigmine 60mg",
          "Prednisolone 20mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-17",
        diagnosis:
          "Muscle strength improved with treatment and fatigue episodes became less frequent.",
        medicines: [
          "Pyridostigmine 60mg",
          "Prednisolone 10mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-25",
        diagnosis:
          "Patient resumed normal activities with minimal muscle weakness. Continue maintenance therapy.",
        medicines: [
          "Pyridostigmine 60mg",
          "Prednisolone 10mg",
        ],
      },
    ],
  },
  {
    id: "MCP050",
    name: "Anusha Reddy",
    age: 27,
    gender: "Female",
    disease: "Migraine",
    doctorId: "MCD005",
    doctorName: "Dr. Priya Nair",
    history: [
      {
        id: 1,
        date: "2026-02-06",
        diagnosis:
          "Presented with recurrent unilateral headaches accompanied by nausea and light sensitivity.",
        medicines: [
          "Sumatriptan 50mg",
          "Naproxen 250mg",
        ],
      },
      {
        id: 2,
        date: "2026-04-02",
        diagnosis:
          "Migraine attacks reduced significantly after preventive treatment and sleep regulation.",
        medicines: [
          "Sumatriptan 50mg",
          "Propranolol 40mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-18",
        diagnosis:
          "Only occasional mild headaches reported. Continue preventive therapy and hydration.",
        medicines: [
          "Propranolol 40mg",
          "Sumatriptan 50mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-30",
        diagnosis:
          "Condition remained stable with no severe migraine episodes during the past month.",
        medicines: [
          "Propranolol 40mg",
          "Sumatriptan 50mg",
        ],
      },
    ],
  },
  {
    id: "MCP051",
    name: "Murali Krishna",
    age: 60,
    gender: "Male",
    disease: "Peripheral Neuropathy",
    doctorId: "MCD006",
    doctorName: "Dr. Karan Malhotra",
    history: [
      {
        id: 1,
        date: "2026-01-18",
        diagnosis:
          "Patient complained of burning sensation and numbness in both feet affecting daily walking.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
      {
        id: 2,
        date: "2026-03-12",
        diagnosis:
          "Pain reduced considerably after medication with gradual improvement in sensation.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
      {
        id: 3,
        date: "2026-05-21",
        diagnosis:
          "Patient reported improved balance and reduced numbness. Continue medication and foot care.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
      {
        id: 4,
        date: "2026-08-01",
        diagnosis:
          "Neurological findings remained stable with no progression of symptoms.",
        medicines: [
          "Pregabalin 75mg",
          "Methylcobalamin 1500mcg",
        ],
      },
    ],
  },
  {
    id: "MCP052",
    name: "Deepthi Sharma",
    age: 44,
    gender: "Female",
    disease: "Cervical Dystonia",
    doctorId: "MCD007",
    doctorName: "Dr. Rohit Kulkarni",
    history: [
      {
        id: 1,
        date: "2026-01-11",
        diagnosis:
          "Patient experienced involuntary neck muscle contractions causing pain and abnormal head posture.",
        medicines: [
          "Baclofen 10mg",
          "Ibuprofen 400mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-06",
        diagnosis:
          "Neck stiffness improved after medication and physiotherapy sessions.",
        medicines: [
          "Baclofen 10mg",
          "Botulinum Toxin Injection",
        ],
      },
      {
        id: 3,
        date: "2026-05-17",
        diagnosis:
          "Patient reported improved neck mobility with only occasional muscle spasms.",
        medicines: [
          "Baclofen 10mg",
          "Botulinum Toxin Injection",
        ],
      },
      {
        id: 4,
        date: "2026-07-28",
        diagnosis:
          "Condition remained stable with continued benefit from physiotherapy and treatment.",
        medicines: [
          "Baclofen 10mg",
          "Botulinum Toxin Injection",
        ],
      },
      {
        id: 5,
        date: "2026-08-05",
        diagnosis:
          "Patient maintained good functional improvement. Continue current management plan.",
        medicines: [
          "Baclofen 10mg",
          "Botulinum Toxin Injection",
        ],
      },
    ],
  },
    {
    id: "MCP053",
    name: "Kiran Verma",
    age: 49,
    gender: "Male",
    disease: "Vertigo",
    doctorId: "MCD008",
    doctorName: "Dr. Siddharth Iyer",
    history: [
      {
        id: 1,
        date: "2026-01-15",
        diagnosis:
          "Patient complained of spinning sensation while changing head position with occasional nausea.",
        medicines: [
          "Betahistine 16mg",
          "Ondansetron 4mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-09",
        diagnosis:
          "Vertigo episodes reduced after vestibular rehabilitation and medication.",
        medicines: [
          "Betahistine 16mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-18",
        diagnosis:
          "Only mild dizziness reported occasionally. Continue vestibular exercises and follow-up.",
        medicines: [
          "Betahistine 16mg",
        ],
      },
    ],
  },
  {
    id: "MCP054",
    name: "Snehal Patil",
    age: 35,
    gender: "Female",
    disease: "Multiple Sclerosis",
    doctorId: "MCD006",
    doctorName: "Dr. Karan Malhotra",
    history: [
      {
        id: 1,
        date: "2026-01-27",
        diagnosis:
          "Presented with numbness in both legs and intermittent blurred vision. MRI supported multiple sclerosis.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
      {
        id: 2,
        date: "2026-03-25",
        diagnosis:
          "Neurological symptoms improved with treatment. No fresh relapse was observed.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
      {
        id: 3,
        date: "2026-06-01",
        diagnosis:
          "Condition remained stable with good mobility. Continue disease-modifying therapy.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-07-29",
        diagnosis:
          "Follow-up imaging showed no significant progression of disease.",
        medicines: [
          "Interferon Beta-1a",
          "Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP055",
    name: "Mahendra Rao",
    age: 58,
    gender: "Male",
    disease: "Transient Ischemic Attack",
    doctorId: "MCD005",
    doctorName: "Dr. Priya Nair",
    history: [
      {
        id: 1,
        date: "2026-01-19",
        diagnosis:
          "Experienced temporary weakness of the left arm with slurred speech lasting approximately 30 minutes.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-14",
        diagnosis:
          "No recurrent neurological symptoms reported. Blood pressure remained under control.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
          "Atorvastatin 20mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-30",
        diagnosis:
          "Patient remained clinically stable with no further transient episodes.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
          "Atorvastatin 20mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-31",
        diagnosis:
          "Continued preventive therapy with regular neurological follow-up advised.",
        medicines: [
          "Aspirin 75mg",
          "Clopidogrel 75mg",
          "Atorvastatin 20mg",
        ],
      },
    ],
  },
  {
    id: "MCP056",
    name: "Pallavi Nair",
    age: 39,
    gender: "Female",
    disease: "Trigeminal Neuralgia",
    doctorId: "MCD007",
    doctorName: "Dr. Rohit Kulkarni",
    history: [
      {
        id: 1,
        date: "2026-02-08",
        diagnosis:
          "Patient reported severe electric shock-like pain over the right side of the face while eating.",
        medicines: [
          "Carbamazepine 200mg",
        ],
      },
      {
        id: 2,
        date: "2026-04-03",
        diagnosis:
          "Pain episodes became less frequent after treatment with good medication tolerance.",
        medicines: [
          "Carbamazepine 200mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-20",
        diagnosis:
          "Only occasional mild facial pain remained. Continue medication and routine review.",
        medicines: [
          "Carbamazepine 200mg",
        ],
      },
      {
        id: 4,
        date: "2026-08-04",
        diagnosis:
          "Condition remained well controlled without significant flare-ups.",
        medicines: [
          "Carbamazepine 200mg",
        ],
      },
    ],
  },
    {
    id: "MCP057",
    name: "Rajesh Kumar",
    age: 48,
    gender: "Male",
    disease: "Knee Osteoarthritis",
    doctorId: "MCD009",
    doctorName: "Dr. Aman Khanna",
    history: [
      {
        id: 1,
        date: "2026-01-10",
        diagnosis:
          "Patient complained of progressive knee pain and morning stiffness affecting daily walking.",
        medicines: [
          "Aceclofenac 100mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 2,
        date: "2026-03-08",
        diagnosis:
          "Pain reduced after physiotherapy and medication. Advised regular strengthening exercises.",
        medicines: [
          "Aceclofenac 100mg",
          "Glucosamine 1500mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-20",
        diagnosis:
          "Mobility improved with occasional discomfort after prolonged walking. Continue conservative treatment.",
        medicines: [
          "Glucosamine 1500mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-07-29",
        diagnosis:
          "Condition remained stable with improved joint function. Routine orthopedic review advised.",
        medicines: [
          "Glucosamine 1500mg",
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP058",
    name: "Priya Sharma",
    age: 29,
    gender: "Female",
    disease: "ACL Tear",
    doctorId: "MCD010",
    doctorName: "Dr. Sneha Kapoor",
    history: [
      {
        id: 1,
        date: "2026-02-02",
        diagnosis:
          "Sustained a twisting injury to the right knee while playing badminton. MRI confirmed ACL tear.",
        medicines: [
          "Etoricoxib 60mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-18",
        diagnosis:
          "Swelling reduced after rehabilitation. Arthroscopic reconstruction was discussed.",
        medicines: [
          "Etoricoxib 60mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-07",
        diagnosis:
          "Patient regained good knee stability after surgery and physiotherapy.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP059",
    name: "Mahesh Reddy",
    age: 56,
    gender: "Male",
    disease: "Lumbar Disc Herniation",
    doctorId: "MCD012",
    doctorName: "Dr. Harish Patel",
    history: [
      {
        id: 1,
        date: "2026-01-21",
        diagnosis:
          "Presented with severe lower back pain radiating to the left leg. MRI confirmed lumbar disc herniation.",
        medicines: [
          "Pregabalin 75mg",
          "Diclofenac 50mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-12",
        diagnosis:
          "Pain intensity decreased after medication and supervised physiotherapy.",
        medicines: [
          "Pregabalin 75mg",
          "Diclofenac 50mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-24",
        diagnosis:
          "Patient resumed normal activities with only mild intermittent back pain.",
        medicines: [
          "Pregabalin 75mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-07-31",
        diagnosis:
          "Neurological examination remained normal. Continue back-strengthening exercises.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP060",
    name: "Anitha Nair",
    age: 43,
    gender: "Female",
    disease: "Frozen Shoulder",
    doctorId: "MCD011",
    doctorName: "Dr. Rahul Deshmukh",
    history: [
      {
        id: 1,
        date: "2026-01-16",
        diagnosis:
          "Patient complained of progressive shoulder stiffness with restricted range of motion.",
        medicines: [
          "Aceclofenac 100mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-05",
        diagnosis:
          "Pain improved after physiotherapy although shoulder movements remained restricted.",
        medicines: [
          "Aceclofenac 100mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-17",
        diagnosis:
          "Shoulder mobility improved significantly with regular stretching exercises.",
        medicines: [
          "Aceclofenac 100mg",
        ],
      },
      {
        id: 4,
        date: "2026-08-02",
        diagnosis:
          "Patient achieved near-normal shoulder movement. Continue home exercise program.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
    {
    id: "MCP061",
    name: "Venkatesh Rao",
    age: 62,
    gender: "Male",
    disease: "Hip Osteoarthritis",
    doctorId: "MCD009",
    doctorName: "Dr. Aman Khanna",
    history: [
      {
        id: 1,
        date: "2026-01-14",
        diagnosis:
          "Patient reported persistent hip pain with reduced range of motion while walking.",
        medicines: [
          "Aceclofenac 100mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 2,
        date: "2026-03-09",
        diagnosis:
          "Pain reduced after medication and physiotherapy. Walking distance improved gradually.",
        medicines: [
          "Aceclofenac 100mg",
          "Glucosamine 1500mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-26",
        diagnosis:
          "Hip mobility remained satisfactory with occasional discomfort after prolonged activity.",
        medicines: [
          "Glucosamine 1500mg",
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP062",
    name: "Shalini Gupta",
    age: 33,
    gender: "Female",
    disease: "Rotator Cuff Injury",
    doctorId: "MCD010",
    doctorName: "Dr. Sneha Kapoor",
    history: [
      {
        id: 1,
        date: "2026-02-07",
        diagnosis:
          "Patient sustained a shoulder injury while lifting heavy objects. MRI showed a partial rotator cuff tear.",
        medicines: [
          "Etoricoxib 60mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-30",
        diagnosis:
          "Pain decreased after physiotherapy with improved shoulder strength and flexibility.",
        medicines: [
          "Etoricoxib 60mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-11",
        diagnosis:
          "Patient regained near-normal shoulder function. Continue strengthening exercises.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-07-30",
        diagnosis:
          "Shoulder remained stable without recurrence of symptoms. Routine follow-up advised.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP063",
    name: "Arun Mishra",
    age: 45,
    gender: "Male",
    disease: "Sciatica",
    doctorId: "MCD012",
    doctorName: "Dr. Harish Patel",
    history: [
      {
        id: 1,
        date: "2026-01-19",
        diagnosis:
          "Presented with lower back pain radiating to the right leg along with tingling sensation.",
        medicines: [
          "Pregabalin 75mg",
          "Diclofenac 50mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-15",
        diagnosis:
          "Leg pain reduced significantly following physiotherapy and medication.",
        medicines: [
          "Pregabalin 75mg",
          "Diclofenac 50mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-28",
        diagnosis:
          "Patient returned to normal work with only occasional discomfort after prolonged sitting.",
        medicines: [
          "Pregabalin 75mg",
        ],
      },
      {
        id: 4,
        date: "2026-08-01",
        diagnosis:
          "Symptoms remained well controlled. Continue back-strengthening exercises.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP064",
    name: "Keerthi Ramesh",
    age: 38,
    gender: "Female",
    disease: "Meniscus Injury",
    doctorId: "MCD011",
    doctorName: "Dr. Rahul Deshmukh",
    history: [
      {
        id: 1,
        date: "2026-01-27",
        diagnosis:
          "Patient injured the knee during a fall. MRI confirmed a medial meniscus tear.",
        medicines: [
          "Aceclofenac 100mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-20",
        diagnosis:
          "Swelling reduced after arthroscopic treatment and rehabilitation exercises.",
        medicines: [
          "Aceclofenac 100mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-09",
        diagnosis:
          "Patient regained good knee stability with full range of motion during follow-up.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
    {
    id: "MCP065",
    name: "Srinivas Reddy",
    age: 54,
    gender: "Male",
    disease: "Cervical Spondylosis",
    doctorId: "MCD012",
    doctorName: "Dr. Harish Patel",
    history: [
      {
        id: 1,
        date: "2026-01-12",
        diagnosis:
          "Patient complained of chronic neck pain radiating to the right shoulder with occasional numbness.",
        medicines: [
          "Diclofenac 50mg",
          "Pregabalin 75mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-08",
        diagnosis:
          "Neck pain reduced after physiotherapy and posture correction exercises.",
        medicines: [
          "Diclofenac 50mg",
          "Pregabalin 75mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-27",
        diagnosis:
          "Patient reported improved neck mobility with only mild stiffness after prolonged work.",
        medicines: [
          "Pregabalin 75mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-07-30",
        diagnosis:
          "Condition remained stable. Continue neck strengthening exercises and ergonomic precautions.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP066",
    name: "Pooja Deshmukh",
    age: 31,
    gender: "Female",
    disease: "Ankle Sprain",
    doctorId: "MCD010",
    doctorName: "Dr. Sneha Kapoor",
    history: [
      {
        id: 1,
        date: "2026-02-04",
        diagnosis:
          "Patient twisted the left ankle while running. Examination confirmed a Grade II ankle sprain.",
        medicines: [
          "Aceclofenac 100mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-19",
        diagnosis:
          "Swelling subsided with rest, bracing, and physiotherapy. Walking improved significantly.",
        medicines: [
          "Aceclofenac 100mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-12",
        diagnosis:
          "Patient returned to normal activities without instability. Continue strengthening exercises.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP067",
    name: "Vivek Sharma",
    age: 42,
    gender: "Male",
    disease: "Tennis Elbow",
    doctorId: "MCD011",
    doctorName: "Dr. Rahul Deshmukh",
    history: [
      {
        id: 1,
        date: "2026-01-23",
        diagnosis:
          "Patient reported pain over the outer elbow aggravated by gripping and lifting activities.",
        medicines: [
          "Ibuprofen 400mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-17",
        diagnosis:
          "Pain intensity reduced after physiotherapy and activity modification.",
        medicines: [
          "Ibuprofen 400mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-31",
        diagnosis:
          "Elbow function improved with minimal discomfort during strenuous work.",
        medicines: [
          "Ibuprofen 400mg",
        ],
      },
      {
        id: 4,
        date: "2026-08-03",
        diagnosis:
          "Patient remained symptom-free during routine activities. Continue home exercise program.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP068",
    name: "Nandini Iyer",
    age: 58,
    gender: "Female",
    disease: "Rheumatoid Arthritis",
    doctorId: "MCD009",
    doctorName: "Dr. Aman Khanna",
    history: [
      {
        id: 1,
        date: "2026-01-18",
        diagnosis:
          "Patient presented with pain and swelling involving both wrist and finger joints.",
        medicines: [
          "Methotrexate 7.5mg",
          "Folic Acid 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-11",
        diagnosis:
          "Joint swelling decreased with medication. Morning stiffness was significantly reduced.",
        medicines: [
          "Methotrexate 10mg",
          "Folic Acid 5mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-23",
        diagnosis:
          "Disease activity remained low with improved hand function. Continue long-term therapy.",
        medicines: [
          "Methotrexate 10mg",
          "Folic Acid 5mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-31",
        diagnosis:
          "Patient remained clinically stable with no new joint deformities.",
        medicines: [
          "Methotrexate 10mg",
          "Folic Acid 5mg",
        ],
      },
      {
        id: 5,
        date: "2026-08-05",
        diagnosis:
          "Routine review showed good disease control. Continue medication and regular blood monitoring.",
        medicines: [
          "Methotrexate 10mg",
          "Folic Acid 5mg",
        ],
      },
    ],
  },
    {
    id: "MCP069",
    name: "Harish Naidu",
    age: 51,
    gender: "Male",
    disease: "Distal Radius Fracture",
    doctorId: "MCD011",
    doctorName: "Dr. Rahul Deshmukh",
    history: [
      {
        id: 1,
        date: "2026-01-11",
        diagnosis:
          "Patient sustained a fall onto the outstretched hand. X-ray confirmed a distal radius fracture.",
        medicines: [
          "Paracetamol 650mg",
          "Aceclofenac 100mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-27",
        diagnosis:
          "Fracture alignment remained satisfactory in follow-up imaging. Wrist immobilization continued.",
        medicines: [
          "Calcium + Vitamin D3",
          "Aceclofenac 100mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-08",
        diagnosis:
          "Bone healing progressed well after cast removal. Wrist mobility exercises were initiated.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-07-24",
        diagnosis:
          "Fracture healed completely with near-normal wrist function restored.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP070",
    name: "Aishwarya Menon",
    age: 27,
    gender: "Female",
    disease: "Plantar Fasciitis",
    doctorId: "MCD010",
    doctorName: "Dr. Sneha Kapoor",
    history: [
      {
        id: 1,
        date: "2026-02-03",
        diagnosis:
          "Patient reported severe heel pain during the first steps in the morning. Examination suggested plantar fasciitis.",
        medicines: [
          "Ibuprofen 400mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-26",
        diagnosis:
          "Heel pain reduced with stretching exercises and shoe modifications.",
        medicines: [
          "Ibuprofen 400mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-15",
        diagnosis:
          "Patient returned to normal walking without significant heel discomfort.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP071",
    name: "Satish Verma",
    age: 46,
    gender: "Male",
    disease: "Carpal Tunnel Syndrome",
    doctorId: "MCD012",
    doctorName: "Dr. Harish Patel",
    history: [
      {
        id: 1,
        date: "2026-01-24",
        diagnosis:
          "Patient complained of numbness and tingling in the right hand, especially during the night.",
        medicines: [
          "Pregabalin 75mg",
          "Vitamin B Complex",
        ],
      },
      {
        id: 2,
        date: "2026-03-19",
        diagnosis:
          "Symptoms improved after wrist splint use and medication. Grip strength increased gradually.",
        medicines: [
          "Pregabalin 75mg",
          "Vitamin B Complex",
        ],
      },
      {
        id: 3,
        date: "2026-05-29",
        diagnosis:
          "Only mild intermittent numbness remained. Continue ergonomic modifications and follow-up.",
        medicines: [
          "Vitamin B Complex",
        ],
      },
      {
        id: 4,
        date: "2026-07-30",
        diagnosis:
          "Condition remained stable with no worsening neurological symptoms.",
        medicines: [
          "Vitamin B Complex",
        ],
      },
    ],
  },
  {
    id: "MCP072",
    name: "Lavanya Reddy",
    age: 36,
    gender: "Female",
    disease: "Clavicle Fracture",
    doctorId: "MCD011",
    doctorName: "Dr. Rahul Deshmukh",
    history: [
      {
        id: 1,
        date: "2026-01-17",
        diagnosis:
          "Patient fell from a bicycle resulting in shoulder pain. X-ray confirmed a clavicle fracture.",
        medicines: [
          "Paracetamol 650mg",
          "Aceclofenac 100mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-05",
        diagnosis:
          "Fracture healing progressed well with sling immobilization. Shoulder exercises were initiated.",
        medicines: [
          "Calcium + Vitamin D3",
          "Aceclofenac 100mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-19",
        diagnosis:
          "Patient regained full shoulder movement with complete fracture union on imaging.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
    {
    id: "MCP073",
    name: "Raghav Choudhary",
    age: 53,
    gender: "Male",
    disease: "Femur Fracture",
    doctorId: "MCD009",
    doctorName: "Dr. Aman Khanna",
    history: [
      {
        id: 1,
        date: "2026-01-13",
        diagnosis:
          "Patient sustained a road traffic accident resulting in a displaced femur fracture. Surgical fixation was performed.",
        medicines: [
          "Paracetamol 650mg",
          "Tramadol 50mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 2,
        date: "2026-02-26",
        diagnosis:
          "Post-operative recovery was satisfactory with good wound healing. Partial weight-bearing was initiated.",
        medicines: [
          "Paracetamol 650mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 3,
        date: "2026-04-24",
        diagnosis:
          "Follow-up X-ray showed satisfactory fracture union. Physiotherapy continued to improve strength.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-06-30",
        diagnosis:
          "Patient walked independently with minimal discomfort. Continue strengthening exercises.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP074",
    name: "Neha Kapoor",
    age: 34,
    gender: "Female",
    disease: "Patellar Dislocation",
    doctorId: "MCD010",
    doctorName: "Dr. Sneha Kapoor",
    history: [
      {
        id: 1,
        date: "2026-02-08",
        diagnosis:
          "Patient sustained a twisting injury causing lateral patellar dislocation of the left knee.",
        medicines: [
          "Aceclofenac 100mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-29",
        diagnosis:
          "Knee stability improved after reduction, bracing, and physiotherapy. Swelling resolved completely.",
        medicines: [
          "Aceclofenac 100mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-18",
        diagnosis:
          "Patient regained full knee movement without recurrent instability. Continue quadriceps strengthening.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP075",
    name: "Manoj Prasad",
    age: 49,
    gender: "Male",
    disease: "Osteoporosis",
    doctorId: "MCD012",
    doctorName: "Dr. Harish Patel",
    history: [
      {
        id: 1,
        date: "2026-01-21",
        diagnosis:
          "Bone density scan revealed osteoporosis with increased fracture risk. Medical therapy was initiated.",
        medicines: [
          "Alendronate 70mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 2,
        date: "2026-03-16",
        diagnosis:
          "Patient tolerated treatment well and reported no new bone pain or fractures.",
        medicines: [
          "Alendronate 70mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 3,
        date: "2026-05-27",
        diagnosis:
          "Bone health remained stable with regular supplementation and weight-bearing exercises.",
        medicines: [
          "Alendronate 70mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-07-31",
        diagnosis:
          "Follow-up bone density showed improvement. Continue long-term treatment and monitoring.",
        medicines: [
          "Alendronate 70mg",
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP076",
    name: "Swathi Nair",
    age: 41,
    gender: "Female",
    disease: "Shoulder Impingement Syndrome",
    doctorId: "MCD011",
    doctorName: "Dr. Rahul Deshmukh",
    history: [
      {
        id: 1,
        date: "2026-01-30",
        diagnosis:
          "Patient complained of shoulder pain while lifting the arm above shoulder level. Clinical findings suggested impingement syndrome.",
        medicines: [
          "Ibuprofen 400mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-22",
        diagnosis:
          "Pain reduced significantly after physiotherapy and posture correction exercises.",
        medicines: [
          "Ibuprofen 400mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-08",
        diagnosis:
          "Shoulder function returned to near normal with only occasional discomfort after heavy activity.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-08-03",
        diagnosis:
          "Patient remained symptom-free during daily activities. Continue shoulder strengthening exercises.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
    {
    id: "MCP077",
    name: "Sandeep Verma",
    age: 38,
    gender: "Male",
    disease: "Tibia Fracture",
    doctorId: "MCD011",
    doctorName: "Dr. Rahul Deshmukh",
    history: [
      {
        id: 1,
        date: "2026-01-18",
        diagnosis:
          "Patient sustained a tibial shaft fracture following a motorcycle accident. Internal fixation surgery was performed.",
        medicines: [
          "Paracetamol 650mg",
          "Tramadol 50mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 2,
        date: "2026-03-07",
        diagnosis:
          "Post-operative recovery progressed well with satisfactory wound healing. Partial weight-bearing was advised.",
        medicines: [
          "Paracetamol 650mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 3,
        date: "2026-05-19",
        diagnosis:
          "Follow-up X-ray showed good fracture union. Physiotherapy continued to restore strength.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-07-26",
        diagnosis:
          "Patient regained independent walking with full weight-bearing. Continue strengthening exercises.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP078",
    name: "Divya Kulkarni",
    age: 47,
    gender: "Female",
    disease: "Lumbar Disc Herniation",
    doctorId: "MCD012",
    doctorName: "Dr. Harish Patel",
    history: [
      {
        id: 1,
        date: "2026-01-25",
        diagnosis:
          "Patient complained of severe lower back pain radiating to the left leg. MRI confirmed lumbar disc herniation.",
        medicines: [
          "Pregabalin 75mg",
          "Diclofenac 50mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-18",
        diagnosis:
          "Leg pain reduced after medication and supervised physiotherapy. Straight leg raise test improved.",
        medicines: [
          "Pregabalin 75mg",
          "Diclofenac 50mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-30",
        diagnosis:
          "Patient resumed routine work with only occasional lower back discomfort after prolonged sitting.",
        medicines: [
          "Pregabalin 75mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-08-02",
        diagnosis:
          "Symptoms remained stable without neurological deficits. Continue back-strengthening exercises.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP079",
    name: "Ajay Mishra",
    age: 61,
    gender: "Male",
    disease: "Hip Osteoarthritis",
    doctorId: "MCD009",
    doctorName: "Dr. Aman Khanna",
    history: [
      {
        id: 1,
        date: "2026-01-16",
        diagnosis:
          "Patient reported chronic hip pain with stiffness causing difficulty while climbing stairs.",
        medicines: [
          "Aceclofenac 100mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 2,
        date: "2026-03-10",
        diagnosis:
          "Pain reduced after physiotherapy with improved joint mobility. Continue weight management.",
        medicines: [
          "Aceclofenac 100mg",
          "Glucosamine 1500mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-22",
        diagnosis:
          "Patient remained comfortable during routine activities with only mild discomfort after prolonged walking.",
        medicines: [
          "Glucosamine 1500mg",
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP080",
    name: "Keerthana Rao",
    age: 32,
    gender: "Female",
    disease: "De Quervain's Tenosynovitis",
    doctorId: "MCD010",
    doctorName: "Dr. Sneha Kapoor",
    history: [
      {
        id: 1,
        date: "2026-02-01",
        diagnosis:
          "Patient experienced pain near the thumb while lifting objects. Clinical examination confirmed De Quervain's tenosynovitis.",
        medicines: [
          "Ibuprofen 400mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-24",
        diagnosis:
          "Pain reduced after thumb splinting and physiotherapy. Grip strength improved gradually.",
        medicines: [
          "Ibuprofen 400mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-14",
        diagnosis:
          "Patient reported complete relief during daily activities. Continue stretching exercises as needed.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
    {
    id: "MCP081",
    name: "Prakash Reddy",
    age: 58,
    gender: "Male",
    disease: "Cervical Spondylosis",
    doctorId: "MCD012",
    doctorName: "Dr. Harish Patel",
    history: [
      {
        id: 1,
        date: "2026-01-20",
        diagnosis:
          "Patient reported chronic neck pain radiating to the left arm with intermittent numbness in the fingers.",
        medicines: [
          "Diclofenac 50mg",
          "Pregabalin 75mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-14",
        diagnosis:
          "Pain reduced after medication and physiotherapy. Cervical range of motion improved significantly.",
        medicines: [
          "Pregabalin 75mg",
          "Diclofenac 50mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-28",
        diagnosis:
          "Patient remained comfortable with only mild stiffness after prolonged desk work.",
        medicines: [
          "Pregabalin 75mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-08-01",
        diagnosis:
          "Condition remained stable. Continue posture correction and cervical strengthening exercises.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP082",
    name: "Bhavana Nair",
    age: 35,
    gender: "Female",
    disease: "Patellar Tendinitis",
    doctorId: "MCD010",
    doctorName: "Dr. Sneha Kapoor",
    history: [
      {
        id: 1,
        date: "2026-02-05",
        diagnosis:
          "Patient complained of pain below the kneecap after regular jogging. Examination confirmed patellar tendinitis.",
        medicines: [
          "Aceclofenac 100mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-31",
        diagnosis:
          "Pain improved after activity modification and physiotherapy. Knee strength increased gradually.",
        medicines: [
          "Aceclofenac 100mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-19",
        diagnosis:
          "Patient resumed light sports activities without significant pain. Continue strengthening exercises.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP083",
    name: "Nagesh Kumar",
    age: 52,
    gender: "Male",
    disease: "Shoulder Bursitis",
    doctorId: "MCD011",
    doctorName: "Dr. Rahul Deshmukh",
    history: [
      {
        id: 1,
        date: "2026-01-29",
        diagnosis:
          "Patient experienced shoulder pain and swelling that worsened while lifting the arm overhead.",
        medicines: [
          "Ibuprofen 400mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-25",
        diagnosis:
          "Inflammation reduced after physiotherapy and anti-inflammatory medication. Shoulder movement improved.",
        medicines: [
          "Ibuprofen 400mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-29",
        diagnosis:
          "Patient regained full shoulder mobility with no pain during routine activities.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-08-04",
        diagnosis:
          "Symptoms completely resolved. Continue shoulder strengthening and posture exercises.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP084",
    name: "Shruthi Iyer",
    age: 44,
    gender: "Female",
    disease: "Osteoporosis",
    doctorId: "MCD009",
    doctorName: "Dr. Aman Khanna",
    history: [
      {
        id: 1,
        date: "2026-01-24",
        diagnosis:
          "Bone density assessment confirmed osteoporosis with increased fracture risk. Medical management was initiated.",
        medicines: [
          "Alendronate 70mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 2,
        date: "2026-03-18",
        diagnosis:
          "Patient tolerated therapy well with no new fractures. Lifestyle modifications were reinforced.",
        medicines: [
          "Alendronate 70mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 3,
        date: "2026-05-31",
        diagnosis:
          "Bone health remained stable with regular supplementation and weight-bearing exercises.",
        medicines: [
          "Alendronate 70mg",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-08-05",
        diagnosis:
          "Follow-up evaluation showed satisfactory progress. Continue long-term treatment and periodic bone density monitoring.",
        medicines: [
          "Alendronate 70mg",
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
    {
    id: "MCP085",
    name: "Ravi Kumar",
    age: 54,
    gender: "Male",
    disease: "Type 2 Diabetes Mellitus",
    doctorId: "MCD013",
    doctorName: "Dr. Vivek Sharma",
    history: [
      {
        id: 1,
        date: "2026-01-14",
        diagnosis:
          "Patient reported excessive thirst and frequent urination. Blood glucose levels confirmed type 2 diabetes.",
        medicines: [
          "Metformin 500mg",
          "Glimepiride 1mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-12",
        diagnosis:
          "Blood sugar levels improved with medication and dietary changes. Regular exercise was encouraged.",
        medicines: [
          "Metformin 500mg",
          "Glimepiride 2mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-26",
        diagnosis:
          "HbA1c showed significant improvement. Continue medication and routine glucose monitoring.",
        medicines: [
          "Metformin 500mg",
          "Glimepiride 2mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-31",
        diagnosis:
          "Diabetes remained well controlled with no new complications reported.",
        medicines: [
          "Metformin 500mg",
          "Glimepiride 2mg",
        ],
      },
    ],
  },
  {
    id: "MCP086",
    name: "Anjali Sharma",
    age: 42,
    gender: "Female",
    disease: "Hypertension",
    doctorId: "MCD014",
    doctorName: "Dr. Sanjay Verma",
    history: [
      {
        id: 1,
        date: "2026-01-18",
        diagnosis:
          "Patient presented with persistently elevated blood pressure and intermittent headaches.",
        medicines: [
          "Amlodipine 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-20",
        diagnosis:
          "Blood pressure improved after medication. Dietary sodium restriction was reinforced.",
        medicines: [
          "Amlodipine 10mg",
          "Telmisartan 40mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-09",
        diagnosis:
          "Blood pressure remained within target range. Continue current treatment and home monitoring.",
        medicines: [
          "Amlodipine 10mg",
          "Telmisartan 40mg",
        ],
      },
    ],
  },
  {
    id: "MCP087",
    name: "Karthik Rao",
    age: 36,
    gender: "Male",
    disease: "Dengue Fever",
    doctorId: "MCD015",
    doctorName: "Dr. Nitin Joshi",
    history: [
      {
        id: 1,
        date: "2026-02-02",
        diagnosis:
          "Patient presented with high-grade fever, body pain, and low platelet count suggestive of dengue fever.",
        medicines: [
          "Paracetamol 650mg",
          "ORS",
        ],
      },
      {
        id: 2,
        date: "2026-02-08",
        diagnosis:
          "Platelet count improved with supportive treatment. Hydration status remained satisfactory.",
        medicines: [
          "Paracetamol 650mg",
          "ORS",
        ],
      },
      {
        id: 3,
        date: "2026-02-18",
        diagnosis:
          "Patient recovered completely with normal platelet count and no residual symptoms.",
        medicines: [
          "Multivitamin",
        ],
      },
    ],
  },
  {
    id: "MCP088",
    name: "Sneha Nair",
    age: 31,
    gender: "Female",
    disease: "Acute Gastritis",
    doctorId: "MCD016",
    doctorName: "Dr. Akash Menon",
    history: [
      {
        id: 1,
        date: "2026-01-22",
        diagnosis:
          "Patient complained of burning upper abdominal pain associated with nausea after meals.",
        medicines: [
          "Pantoprazole 40mg",
          "Sucralfate Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-03-09",
        diagnosis:
          "Symptoms improved after treatment. Advised to avoid spicy foods and irregular meals.",
        medicines: [
          "Pantoprazole 40mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-28",
        diagnosis:
          "Patient remained symptom-free with dietary modifications. Continue medication only if needed.",
        medicines: [
          "Pantoprazole 40mg",
        ],
      },
      {
        id: 4,
        date: "2026-08-03",
        diagnosis:
          "No recurrence of gastric symptoms. Continue healthy eating habits and routine follow-up if required.",
        medicines: [
          "Probiotic Capsule",
        ],
      },
    ],
  },
    {
    id: "MCP089",
    name: "Harsha Vardhan",
    age: 47,
    gender: "Male",
    disease: "Hypothyroidism",
    doctorId: "MCD014",
    doctorName: "Dr. Sanjay Verma",
    history: [
      {
        id: 1,
        date: "2026-01-16",
        diagnosis:
          "Patient complained of fatigue, weight gain, and cold intolerance. Thyroid profile confirmed hypothyroidism.",
        medicines: [
          "Levothyroxine 50mcg",
        ],
      },
      {
        id: 2,
        date: "2026-03-14",
        diagnosis:
          "Energy levels improved after treatment. Thyroid hormone levels showed satisfactory improvement.",
        medicines: [
          "Levothyroxine 75mcg",
        ],
      },
      {
        id: 3,
        date: "2026-06-02",
        diagnosis:
          "Thyroid function remained stable. Continue medication with periodic thyroid profile monitoring.",
        medicines: [
          "Levothyroxine 75mcg",
        ],
      },
    ],
  },
  {
    id: "MCP090",
    name: "Deepika Reddy",
    age: 29,
    gender: "Female",
    disease: "Iron Deficiency Anemia",
    doctorId: "MCD016",
    doctorName: "Dr. Akash Menon",
    history: [
      {
        id: 1,
        date: "2026-02-03",
        diagnosis:
          "Patient reported fatigue and dizziness. Blood investigations confirmed iron deficiency anemia.",
        medicines: [
          "Ferrous Ascorbate",
          "Folic Acid 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-29",
        diagnosis:
          "Hemoglobin levels improved after iron supplementation. Fatigue reduced significantly.",
        medicines: [
          "Ferrous Ascorbate",
          "Folic Acid 5mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-20",
        diagnosis:
          "Hemoglobin normalized. Continue iron-rich diet and complete prescribed supplementation.",
        medicines: [
          "Ferrous Ascorbate",
        ],
      },
      {
        id: 4,
        date: "2026-08-01",
        diagnosis:
          "Patient remained asymptomatic with stable blood counts during follow-up.",
        medicines: [
          "Multivitamin",
        ],
      },
    ],
  },
  {
    id: "MCP091",
    name: "Srinivas Murthy",
    age: 59,
    gender: "Male",
    disease: "Viral Fever",
    doctorId: "MCD013",
    doctorName: "Dr. Vivek Sharma",
    history: [
      {
        id: 1,
        date: "2026-01-28",
        diagnosis:
          "Patient presented with fever, body aches, and sore throat. Clinical findings suggested viral fever.",
        medicines: [
          "Paracetamol 650mg",
          "Cetirizine 10mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-04",
        diagnosis:
          "Fever subsided with supportive treatment. General condition improved significantly.",
        medicines: [
          "Paracetamol 650mg",
        ],
      },
      {
        id: 3,
        date: "2026-02-11",
        diagnosis:
          "Patient recovered completely without complications. Advised adequate hydration and rest.",
        medicines: [
          "Multivitamin",
        ],
      },
    ],
  },
  {
    id: "MCP092",
    name: "Lakshmi Devi",
    age: 52,
    gender: "Female",
    disease: "Type 2 Diabetes Mellitus",
    doctorId: "MCD014",
    doctorName: "Dr. Sanjay Verma",
    history: [
      {
        id: 1,
        date: "2026-01-20",
        diagnosis:
          "Patient reported increased thirst and frequent urination. Blood glucose levels confirmed diabetes.",
        medicines: [
          "Metformin 500mg",
          "Glimepiride 1mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-18",
        diagnosis:
          "Blood glucose improved with medication and dietary modifications. Weight reduction was advised.",
        medicines: [
          "Metformin 500mg",
          "Glimepiride 2mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-06",
        diagnosis:
          "HbA1c remained within target range. Continue current medication and regular monitoring.",
        medicines: [
          "Metformin 500mg",
          "Glimepiride 2mg",
        ],
      },
      {
        id: 4,
        date: "2026-08-04",
        diagnosis:
          "Diabetes remained well controlled with no evidence of complications.",
        medicines: [
          "Metformin 500mg",
          "Glimepiride 2mg",
        ],
      },
    ],
  },
    {
    id: "MCP093",
    name: "Praveen Kumar",
    age: 45,
    gender: "Male",
    disease: "Typhoid Fever",
    doctorId: "MCD015",
    doctorName: "Dr. Nitin Joshi",
    history: [
      {
        id: 1,
        date: "2026-02-06",
        diagnosis:
          "Patient presented with persistent high-grade fever, abdominal discomfort, and loss of appetite. Widal test supported typhoid fever.",
        medicines: [
          "Azithromycin 500mg",
          "Paracetamol 650mg",
          "ORS",
        ],
      },
      {
        id: 2,
        date: "2026-02-14",
        diagnosis:
          "Body temperature normalized and appetite improved. Advised to complete the antibiotic course.",
        medicines: [
          "Azithromycin 500mg",
          "Probiotic Capsule",
        ],
      },
      {
        id: 3,
        date: "2026-03-01",
        diagnosis:
          "Patient recovered completely without complications. Recommended safe food and drinking water practices.",
        medicines: [
          "Multivitamin",
        ],
      },
    ],
  },
  {
    id: "MCP094",
    name: "Pallavi Sharma",
    age: 34,
    gender: "Female",
    disease: "Urinary Tract Infection",
    doctorId: "MCD016",
    doctorName: "Dr. Akash Menon",
    history: [
      {
        id: 1,
        date: "2026-01-30",
        diagnosis:
          "Patient complained of burning during urination, increased frequency, and lower abdominal discomfort.",
        medicines: [
          "Nitrofurantoin 100mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-10",
        diagnosis:
          "Symptoms resolved after completing antibiotics. Urine analysis returned to normal.",
        medicines: [
          "Nitrofurantoin 100mg",
        ],
      },
      {
        id: 3,
        date: "2026-04-05",
        diagnosis:
          "No recurrence of urinary symptoms. Advised adequate hydration and hygiene measures.",
        medicines: [
          "Cranberry Supplement",
        ],
      },
      {
        id: 4,
        date: "2026-07-22",
        diagnosis:
          "Routine follow-up remained normal with no evidence of recurrent infection.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP095",
    name: "Manohar Reddy",
    age: 57,
    gender: "Male",
    disease: "Fatty Liver Disease",
    doctorId: "MCD013",
    doctorName: "Dr. Vivek Sharma",
    history: [
      {
        id: 1,
        date: "2026-01-18",
        diagnosis:
          "Ultrasound revealed Grade I fatty liver. Patient was advised weight reduction and dietary modification.",
        medicines: [
          "Vitamin E 400 IU",
        ],
      },
      {
        id: 2,
        date: "2026-03-28",
        diagnosis:
          "Liver function tests improved after lifestyle changes. Weight reduction noted.",
        medicines: [
          "Vitamin E 400 IU",
        ],
      },
      {
        id: 3,
        date: "2026-06-18",
        diagnosis:
          "Patient maintained healthy liver function with continued exercise and balanced diet.",
        medicines: [
          "Multivitamin",
        ],
      },
    ],
  },
  {
    id: "MCP096",
    name: "Aparna Nair",
    age: 39,
    gender: "Female",
    disease: "Acute Gastroenteritis",
    doctorId: "MCD015",
    doctorName: "Dr. Nitin Joshi",
    history: [
      {
        id: 1,
        date: "2026-02-11",
        diagnosis:
          "Presented with vomiting, diarrhea, and dehydration after consuming contaminated food.",
        medicines: [
          "ORS",
          "Ondansetron 4mg",
          "Racecadotril 100mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-16",
        diagnosis:
          "Diarrhea resolved with supportive treatment. Hydration status normalized.",
        medicines: [
          "ORS",
          "Probiotic Capsule",
        ],
      },
      {
        id: 3,
        date: "2026-03-03",
        diagnosis:
          "Patient recovered completely and tolerated a normal diet without recurrence.",
        medicines: [
          "Probiotic Capsule",
        ],
      },
      {
        id: 4,
        date: "2026-06-25",
        diagnosis:
          "Routine follow-up was unremarkable. Reinforced food hygiene and safe drinking water practices.",
        medicines: [],
      },
    ],
  },
    {
    id: "MCP097",
    name: "Rohit Verma",
    age: 50,
    gender: "Male",
    disease: "Vitamin D Deficiency",
    doctorId: "MCD016",
    doctorName: "Dr. Akash Menon",
    history: [
      {
        id: 1,
        date: "2026-01-12",
        diagnosis:
          "Patient complained of generalized body pain and muscle weakness. Laboratory tests confirmed vitamin D deficiency.",
        medicines: [
          "Vitamin D3 60000 IU",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 2,
        date: "2026-03-09",
        diagnosis:
          "Muscle strength improved after supplementation. Repeat vitamin D levels showed satisfactory improvement.",
        medicines: [
          "Vitamin D3 60000 IU",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 3,
        date: "2026-06-02",
        diagnosis:
          "Patient remained symptom-free. Advised regular sunlight exposure and balanced nutrition.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
    ],
  },
  {
    id: "MCP098",
    name: "Keerthi Rao",
    age: 37,
    gender: "Female",
    disease: "Bronchitis",
    doctorId: "MCD013",
    doctorName: "Dr. Vivek Sharma",
    history: [
      {
        id: 1,
        date: "2026-02-04",
        diagnosis:
          "Patient presented with persistent cough, mild fever, and chest congestion. Clinical examination suggested acute bronchitis.",
        medicines: [
          "Amoxicillin-Clavulanate 625mg",
          "Ambroxol Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-02-15",
        diagnosis:
          "Cough reduced considerably with treatment. Chest examination showed clear improvement.",
        medicines: [
          "Ambroxol Syrup",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 3,
        date: "2026-03-08",
        diagnosis:
          "Patient recovered completely without respiratory complications.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP099",
    name: "Suresh Menon",
    age: 63,
    gender: "Male",
    disease: "Hyperlipidemia",
    doctorId: "MCD014",
    doctorName: "Dr. Sanjay Verma",
    history: [
      {
        id: 1,
        date: "2026-01-22",
        diagnosis:
          "Routine blood investigations revealed elevated LDL cholesterol. Lifestyle modifications were advised.",
        medicines: [
          "Rosuvastatin 10mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-21",
        diagnosis:
          "Lipid profile improved with medication and dietary changes. Continue regular exercise.",
        medicines: [
          "Rosuvastatin 10mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-14",
        diagnosis:
          "Cholesterol levels remained within target range. Continue long-term treatment.",
        medicines: [
          "Rosuvastatin 10mg",
        ],
      },
      {
        id: 4,
        date: "2026-08-03",
        diagnosis:
          "Patient maintained good lipid control with no medication-related adverse effects.",
        medicines: [
          "Rosuvastatin 10mg",
        ],
      },
    ],
  },
  {
    id: "MCP100",
    name: "Nandita Sharma",
    age: 28,
    gender: "Female",
    disease: "Acute Sinusitis",
    doctorId: "MCD015",
    doctorName: "Dr. Nitin Joshi",
    history: [
      {
        id: 1,
        date: "2026-02-07",
        diagnosis:
          "Patient complained of facial pain, nasal congestion, and headache lasting for one week.",
        medicines: [
          "Amoxicillin-Clavulanate 625mg",
          "Levocetirizine 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-18",
        diagnosis:
          "Symptoms improved after antibiotic therapy. Nasal congestion resolved significantly.",
        medicines: [
          "Levocetirizine 5mg",
          "Steam Inhalation",
        ],
      },
      {
        id: 3,
        date: "2026-03-10",
        diagnosis:
          "Patient recovered completely with no residual sinus symptoms.",
        medicines: [],
      },
    ],
  },
    {
    id: "MCP101",
    name: "Arvind Kulkarni",
    age: 61,
    gender: "Male",
    disease: "Chronic Kidney Disease (Stage 2)",
    doctorId: "MCD016",
    doctorName: "Dr. Akash Menon",
    history: [
      {
        id: 1,
        date: "2026-01-19",
        diagnosis:
          "Routine investigations showed mildly reduced kidney function with elevated serum creatinine. Early-stage chronic kidney disease was diagnosed.",
        medicines: [
          "Telmisartan 40mg",
          "Calcium Carbonate 500mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-17",
        diagnosis:
          "Renal function remained stable with blood pressure under control. Advised adequate hydration and low-salt diet.",
        medicines: [
          "Telmisartan 40mg",
          "Calcium Carbonate 500mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-11",
        diagnosis:
          "Kidney function tests remained stable with no progression of disease.",
        medicines: [
          "Telmisartan 40mg",
        ],
      },
      {
        id: 4,
        date: "2026-08-02",
        diagnosis:
          "Patient remained clinically stable. Continue regular renal function monitoring.",
        medicines: [
          "Telmisartan 40mg",
        ],
      },
    ],
  },
  {
    id: "MCP102",
    name: "Bhavya Rao",
    age: 33,
    gender: "Female",
    disease: "Vitamin B12 Deficiency",
    doctorId: "MCD013",
    doctorName: "Dr. Vivek Sharma",
    history: [
      {
        id: 1,
        date: "2026-02-05",
        diagnosis:
          "Patient complained of fatigue, tingling sensation in feet, and reduced energy. Laboratory tests confirmed vitamin B12 deficiency.",
        medicines: [
          "Methylcobalamin 1500mcg",
          "Multivitamin",
        ],
      },
      {
        id: 2,
        date: "2026-03-30",
        diagnosis:
          "Neurological symptoms improved after supplementation. Energy levels increased noticeably.",
        medicines: [
          "Methylcobalamin 1500mcg",
        ],
      },
      {
        id: 3,
        date: "2026-06-23",
        diagnosis:
          "Vitamin B12 levels normalized. Continue balanced diet and periodic monitoring.",
        medicines: [
          "Multivitamin",
        ],
      },
    ],
  },
  {
    id: "MCP103",
    name: "Mahesh Patel",
    age: 48,
    gender: "Male",
    disease: "Prediabetes",
    doctorId: "MCD014",
    doctorName: "Dr. Sanjay Verma",
    history: [
      {
        id: 1,
        date: "2026-01-27",
        diagnosis:
          "Routine health screening showed elevated fasting blood glucose indicating prediabetes.",
        medicines: [
          "Metformin 500mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-26",
        diagnosis:
          "Blood sugar levels improved with weight loss, dietary changes, and regular walking.",
        medicines: [
          "Metformin 500mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-19",
        diagnosis:
          "Patient remained in the prediabetic range with no progression to diabetes. Lifestyle modifications reinforced.",
        medicines: [
          "Metformin 500mg",
        ],
      },
      {
        id: 4,
        date: "2026-08-04",
        diagnosis:
          "Blood glucose remained stable. Continue exercise and annual health screening.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP104",
    name: "Pavithra Menon",
    age: 40,
    gender: "Female",
    disease: "Food Poisoning",
    doctorId: "MCD015",
    doctorName: "Dr. Nitin Joshi",
    history: [
      {
        id: 1,
        date: "2026-02-12",
        diagnosis:
          "Patient presented with vomiting, abdominal cramps, and diarrhea after consuming contaminated food.",
        medicines: [
          "ORS",
          "Ondansetron 4mg",
          "Probiotic Capsule",
        ],
      },
      {
        id: 2,
        date: "2026-02-17",
        diagnosis:
          "Gastrointestinal symptoms resolved with hydration and supportive treatment.",
        medicines: [
          "ORS",
          "Probiotic Capsule",
        ],
      },
      {
        id: 3,
        date: "2026-03-05",
        diagnosis:
          "Patient recovered completely and resumed normal diet. Food hygiene advice was reinforced.",
        medicines: [],
      },
    ],
  },
    {
    id: "MCP105",
    name: "Rakesh Verma",
    age: 56,
    gender: "Male",
    disease: "Hyperuricemia (Gout)",
    doctorId: "MCD013",
    doctorName: "Dr. Vivek Sharma",
    history: [
      {
        id: 1,
        date: "2026-01-15",
        diagnosis:
          "Patient presented with sudden pain, swelling, and redness in the right great toe. Serum uric acid levels were elevated.",
        medicines: [
          "Allopurinol 100mg",
          "Etoricoxib 60mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-10",
        diagnosis:
          "Joint pain resolved with treatment. Patient was advised to avoid high-purine foods and alcohol.",
        medicines: [
          "Allopurinol 100mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-08",
        diagnosis:
          "Serum uric acid remained within acceptable range. No recurrent gout attacks reported.",
        medicines: [
          "Allopurinol 100mg",
        ],
      },
      {
        id: 4,
        date: "2026-08-03",
        diagnosis:
          "Patient remained clinically stable with continued dietary compliance.",
        medicines: [
          "Allopurinol 100mg",
        ],
      },
    ],
  },
  {
    id: "MCP106",
    name: "Anusha Pillai",
    age: 30,
    gender: "Female",
    disease: "Acute Pharyngitis",
    doctorId: "MCD016",
    doctorName: "Dr. Akash Menon",
    history: [
      {
        id: 1,
        date: "2026-02-01",
        diagnosis:
          "Patient complained of sore throat, painful swallowing, and low-grade fever. Clinical findings suggested acute pharyngitis.",
        medicines: [
          "Amoxicillin 500mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-10",
        diagnosis:
          "Sore throat resolved after antibiotic therapy. Fever subsided completely.",
        medicines: [
          "Warm Salt Water Gargles",
        ],
      },
      {
        id: 3,
        date: "2026-03-01",
        diagnosis:
          "Patient recovered completely with no recurrence of throat symptoms.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP107",
    name: "Kishore Naidu",
    age: 64,
    gender: "Male",
    disease: "Chronic Constipation",
    doctorId: "MCD014",
    doctorName: "Dr. Sanjay Verma",
    history: [
      {
        id: 1,
        date: "2026-01-24",
        diagnosis:
          "Patient reported infrequent bowel movements with abdominal bloating. No alarming gastrointestinal symptoms were noted.",
        medicines: [
          "Lactulose Syrup",
          "Isabgol Husk",
        ],
      },
      {
        id: 2,
        date: "2026-03-18",
        diagnosis:
          "Bowel habits improved with dietary fiber, hydration, and prescribed medication.",
        medicines: [
          "Isabgol Husk",
        ],
      },
      {
        id: 3,
        date: "2026-06-20",
        diagnosis:
          "Patient maintained regular bowel movements. Continue high-fiber diet and adequate water intake.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP108",
    name: "Meghana Reddy",
    age: 38,
    gender: "Female",
    disease: "Migraine",
    doctorId: "MCD015",
    doctorName: "Dr. Nitin Joshi",
    history: [
      {
        id: 1,
        date: "2026-01-28",
        diagnosis:
          "Patient presented with recurrent unilateral headaches associated with nausea and sensitivity to light.",
        medicines: [
          "Sumatriptan 50mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-22",
        diagnosis:
          "Migraine frequency reduced after lifestyle modifications and preventive medication.",
        medicines: [
          "Propranolol 40mg",
          "Sumatriptan 50mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-18",
        diagnosis:
          "Only occasional mild headaches were reported. Continue preventive therapy and avoid known triggers.",
        medicines: [
          "Propranolol 40mg",
        ],
      },
      {
        id: 4,
        date: "2026-08-05",
        diagnosis:
          "Condition remained stable with no severe migraine attacks during the previous two months.",
        medicines: [
          "Propranolol 40mg",
        ],
      },
    ],
  },
    {
    id: "MCP109",
    name: "Srinath Kumar",
    age: 58,
    gender: "Male",
    disease: "Acid Peptic Disease",
    doctorId: "MCD016",
    doctorName: "Dr. Akash Menon",
    history: [
      {
        id: 1,
        date: "2026-01-17",
        diagnosis:
          "Patient complained of burning epigastric pain and acid reflux, especially after spicy meals.",
        medicines: [
          "Pantoprazole 40mg",
          "Sucralfate Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-03-08",
        diagnosis:
          "Symptoms improved significantly after treatment. Patient was advised to avoid late-night meals and spicy food.",
        medicines: [
          "Pantoprazole 40mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-27",
        diagnosis:
          "No recurrence of gastric discomfort. Continue dietary modifications and medication if required.",
        medicines: [
          "Pantoprazole 40mg",
        ],
      },
    ],
  },
  {
    id: "MCP110",
    name: "Harika Sharma",
    age: 35,
    gender: "Female",
    disease: "Vitamin D Deficiency",
    doctorId: "MCD013",
    doctorName: "Dr. Vivek Sharma",
    history: [
      {
        id: 1,
        date: "2026-02-04",
        diagnosis:
          "Patient presented with generalized fatigue, muscle aches, and low serum vitamin D levels.",
        medicines: [
          "Vitamin D3 60000 IU",
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 2,
        date: "2026-03-31",
        diagnosis:
          "Muscle pain reduced after supplementation. Repeat laboratory values showed improvement.",
        medicines: [
          "Vitamin D3 60000 IU",
        ],
      },
      {
        id: 3,
        date: "2026-06-24",
        diagnosis:
          "Vitamin D levels normalized. Continue maintenance supplementation and regular sunlight exposure.",
        medicines: [
          "Calcium + Vitamin D3",
        ],
      },
      {
        id: 4,
        date: "2026-08-03",
        diagnosis:
          "Patient remained symptom-free during follow-up.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP111",
    name: "Vijay Prasad",
    age: 52,
    gender: "Male",
    disease: "Hypothyroidism",
    doctorId: "MCD014",
    doctorName: "Dr. Sanjay Verma",
    history: [
      {
        id: 1,
        date: "2026-01-21",
        diagnosis:
          "Patient complained of tiredness, constipation, and weight gain. Thyroid profile confirmed hypothyroidism.",
        medicines: [
          "Levothyroxine 50mcg",
        ],
      },
      {
        id: 2,
        date: "2026-03-16",
        diagnosis:
          "Symptoms improved after treatment. Thyroid hormone levels approached the normal range.",
        medicines: [
          "Levothyroxine 75mcg",
        ],
      },
      {
        id: 3,
        date: "2026-06-12",
        diagnosis:
          "Patient remained clinically stable with normal thyroid function tests.",
        medicines: [
          "Levothyroxine 75mcg",
        ],
      },
      {
        id: 4,
        date: "2026-08-04",
        diagnosis:
          "Continue long-term thyroid replacement therapy with annual thyroid profile assessment.",
        medicines: [
          "Levothyroxine 75mcg",
        ],
      },
    ],
  },
  {
    id: "MCP112",
    name: "Keerthana Menon",
    age: 41,
    gender: "Female",
    disease: "Viral Upper Respiratory Infection",
    doctorId: "MCD015",
    doctorName: "Dr. Nitin Joshi",
    history: [
      {
        id: 1,
        date: "2026-02-08",
        diagnosis:
          "Patient presented with fever, sore throat, nasal congestion, and dry cough. Clinical findings suggested viral upper respiratory infection.",
        medicines: [
          "Paracetamol 650mg",
          "Levocetirizine 5mg",
          "Steam Inhalation",
        ],
      },
      {
        id: 2,
        date: "2026-02-16",
        diagnosis:
          "Respiratory symptoms improved with supportive treatment. Fever resolved completely.",
        medicines: [
          "Levocetirizine 5mg",
        ],
      },
      {
        id: 3,
        date: "2026-03-02",
        diagnosis:
          "Patient recovered fully with no residual respiratory symptoms.",
        medicines: [],
      },
    ],
  },
    {
    id: "MCP113",
    name: "Aarav Reddy",
    age: 8,
    gender: "Male",
    disease: "Acute Tonsillitis",
    doctorId: "MCD018",
    doctorName: "Dr. Meera Iyer",
    history: [
      {
        id: 1,
        date: "2026-01-16",
        diagnosis:
          "Child presented with fever, sore throat, and difficulty swallowing. Examination revealed enlarged inflamed tonsils.",
        medicines: [
          "Amoxicillin Syrup",
          "Paracetamol Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-01-24",
        diagnosis:
          "Fever subsided and throat pain reduced significantly. Child resumed normal food intake.",
        medicines: [
          "Amoxicillin Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-02-08",
        diagnosis:
          "Complete recovery noted with no residual throat symptoms.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP114",
    name: "Diya Sharma",
    age: 5,
    gender: "Female",
    disease: "Viral Fever",
    doctorId: "MCD017",
    doctorName: "Dr. Rohan Mehta",
    history: [
      {
        id: 1,
        date: "2026-02-03",
        diagnosis:
          "Child presented with fever, runny nose, and reduced appetite. Clinical findings suggested viral fever.",
        medicines: [
          "Paracetamol Syrup",
          "ORS",
        ],
      },
      {
        id: 2,
        date: "2026-02-09",
        diagnosis:
          "Temperature returned to normal and appetite improved. Child remained active during examination.",
        medicines: [
          "Paracetamol Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-02-18",
        diagnosis:
          "Recovered completely with no recurrence of fever.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP115",
    name: "Vihaan Nair",
    age: 11,
    gender: "Male",
    disease: "Bronchial Asthma",
    doctorId: "MCD020",
    doctorName: "Dr. Kavya Menon",
    history: [
      {
        id: 1,
        date: "2026-01-20",
        diagnosis:
          "Child presented with wheezing and shortness of breath after outdoor play. Mild asthma exacerbation was diagnosed.",
        medicines: [
          "Salbutamol Inhaler",
          "Montelukast 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-05",
        diagnosis:
          "Symptoms remained well controlled with inhaler use. Trigger avoidance was reinforced.",
        medicines: [
          "Salbutamol Inhaler",
          "Montelukast 5mg",
        ],
      },
      {
        id: 3,
        date: "2026-05-28",
        diagnosis:
          "No asthma attacks reported during follow-up. Continue preventive therapy.",
        medicines: [
          "Montelukast 5mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-31",
        diagnosis:
          "Asthma remained stable with good inhaler technique and normal daily activity.",
        medicines: [
          "Montelukast 5mg",
        ],
      },
    ],
  },
  {
    id: "MCP116",
    name: "Ananya Patel",
    age: 3,
    gender: "Female",
    disease: "Acute Gastroenteritis",
    doctorId: "MCD019",
    doctorName: "Dr. Arvind Rao",
    history: [
      {
        id: 1,
        date: "2026-02-10",
        diagnosis:
          "Child presented with vomiting, loose stools, and mild dehydration. Oral rehydration therapy was initiated.",
        medicines: [
          "ORS",
          "Zinc Syrup",
          "Probiotic Sachet",
        ],
      },
      {
        id: 2,
        date: "2026-02-14",
        diagnosis:
          "Vomiting resolved and hydration status improved. Child tolerated oral feeds well.",
        medicines: [
          "ORS",
          "Zinc Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-02-24",
        diagnosis:
          "Child recovered completely with normal bowel movements and appetite.",
        medicines: [],
      },
    ],
  },
    {
    id: "MCP117",
    name: "Aditya Kumar",
    age: 9,
    gender: "Male",
    disease: "Acute Otitis Media",
    doctorId: "MCD017",
    doctorName: "Dr. Rohan Mehta",
    history: [
      {
        id: 1,
        date: "2026-01-18",
        diagnosis:
          "Child presented with severe right ear pain, fever, and irritability. Otoscopic examination confirmed acute otitis media.",
        medicines: [
          "Amoxicillin Syrup",
          "Paracetamol Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-01-27",
        diagnosis:
          "Ear pain resolved with antibiotic therapy. Tympanic membrane inflammation reduced significantly.",
        medicines: [
          "Amoxicillin Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-02-12",
        diagnosis:
          "Complete clinical recovery noted with normal ear examination.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP118",
    name: "Saanvi Reddy",
    age: 6,
    gender: "Female",
    disease: "Chickenpox",
    doctorId: "MCD018",
    doctorName: "Dr. Meera Iyer",
    history: [
      {
        id: 1,
        date: "2026-02-05",
        diagnosis:
          "Child presented with fever followed by an itchy vesicular rash over the face, trunk, and limbs. Chickenpox was diagnosed.",
        medicines: [
          "Paracetamol Syrup",
          "Calamine Lotion",
        ],
      },
      {
        id: 2,
        date: "2026-02-14",
        diagnosis:
          "Fever subsided and skin lesions started crusting. No secondary skin infection observed.",
        medicines: [
          "Calamine Lotion",
        ],
      },
      {
        id: 3,
        date: "2026-03-02",
        diagnosis:
          "All lesions healed completely. Child resumed school after full recovery.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP119",
    name: "Krish Verma",
    age: 12,
    gender: "Male",
    disease: "Iron Deficiency Anemia",
    doctorId: "MCD020",
    doctorName: "Dr. Kavya Menon",
    history: [
      {
        id: 1,
        date: "2026-01-24",
        diagnosis:
          "Child presented with fatigue and reduced physical activity. Blood tests confirmed iron deficiency anemia.",
        medicines: [
          "Iron Syrup",
          "Folic Acid Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-03-19",
        diagnosis:
          "Hemoglobin levels improved after supplementation. Appetite and activity level increased.",
        medicines: [
          "Iron Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-06-11",
        diagnosis:
          "Blood counts normalized. Continue iron-rich diet and routine monitoring.",
        medicines: [
          "Multivitamin Syrup",
        ],
      },
      {
        id: 4,
        date: "2026-08-01",
        diagnosis:
          "Child remained healthy with stable hemoglobin levels.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP120",
    name: "Ishita Nair",
    age: 4,
    gender: "Female",
    disease: "Hand, Foot and Mouth Disease",
    doctorId: "MCD019",
    doctorName: "Dr. Arvind Rao",
    history: [
      {
        id: 1,
        date: "2026-02-08",
        diagnosis:
          "Child presented with fever, painful mouth ulcers, and a characteristic rash over the hands and feet.",
        medicines: [
          "Paracetamol Syrup",
          "ORS",
        ],
      },
      {
        id: 2,
        date: "2026-02-15",
        diagnosis:
          "Oral ulcers healed gradually and fever resolved. Child resumed normal feeding.",
        medicines: [
          "ORS",
        ],
      },
      {
        id: 3,
        date: "2026-02-28",
        diagnosis:
          "Complete recovery achieved without complications. Parents were advised on hygiene measures.",
        medicines: [],
      },
    ],
  },
    {
    id: "MCP121",
    name: "Vivaan Sharma",
    age: 7,
    gender: "Male",
    disease: "Acute Bronchiolitis",
    doctorId: "MCD020",
    doctorName: "Dr. Kavya Menon",
    history: [
      {
        id: 1,
        date: "2026-01-22",
        diagnosis:
          "Child presented with cough, wheezing, and mild breathing difficulty following a viral upper respiratory infection.",
        medicines: [
          "Saline Nebulization",
          "Paracetamol Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-01-30",
        diagnosis:
          "Breathing improved with supportive treatment. Oxygen saturation remained within normal limits.",
        medicines: [
          "Saline Nebulization",
        ],
      },
      {
        id: 3,
        date: "2026-02-16",
        diagnosis:
          "Child recovered completely with clear chest examination and normal activity level.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP122",
    name: "Myra Patel",
    age: 10,
    gender: "Female",
    disease: "Allergic Rhinitis",
    doctorId: "MCD017",
    doctorName: "Dr. Rohan Mehta",
    history: [
      {
        id: 1,
        date: "2026-02-04",
        diagnosis:
          "Child complained of recurrent sneezing, nasal itching, and watery eyes, especially during the morning.",
        medicines: [
          "Cetirizine Syrup",
          "Saline Nasal Spray",
        ],
      },
      {
        id: 2,
        date: "2026-03-11",
        diagnosis:
          "Symptoms reduced after medication and avoidance of common allergens.",
        medicines: [
          "Cetirizine Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-06-09",
        diagnosis:
          "Child remained symptom-free during follow-up with only occasional seasonal sneezing.",
        medicines: [],
      },
      {
        id: 4,
        date: "2026-08-03",
        diagnosis:
          "Condition remained well controlled. Parents advised to continue allergen avoidance.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP123",
    name: "Arjun Rao",
    age: 13,
    gender: "Male",
    disease: "Typhoid Fever",
    doctorId: "MCD018",
    doctorName: "Dr. Meera Iyer",
    history: [
      {
        id: 1,
        date: "2026-01-28",
        diagnosis:
          "Child presented with persistent high fever, abdominal pain, and poor appetite. Blood investigations confirmed typhoid fever.",
        medicines: [
          "Azithromycin Suspension",
          "Paracetamol Syrup",
          "ORS",
        ],
      },
      {
        id: 2,
        date: "2026-02-08",
        diagnosis:
          "Temperature normalized and appetite improved after completing antibiotic therapy.",
        medicines: [
          "Azithromycin Suspension",
        ],
      },
      {
        id: 3,
        date: "2026-02-26",
        diagnosis:
          "Child recovered fully with no abdominal complaints or fever recurrence.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP124",
    name: "Kiara Menon",
    age: 2,
    gender: "Female",
    disease: "Diaper Dermatitis",
    doctorId: "MCD019",
    doctorName: "Dr. Arvind Rao",
    history: [
      {
        id: 1,
        date: "2026-02-12",
        diagnosis:
          "Infant presented with redness and irritation in the diaper area without signs of secondary infection.",
        medicines: [
          "Zinc Oxide Cream",
          "Barrier Cream",
        ],
      },
      {
        id: 2,
        date: "2026-02-19",
        diagnosis:
          "Skin irritation reduced significantly after frequent diaper changes and topical treatment.",
        medicines: [
          "Zinc Oxide Cream",
        ],
      },
      {
        id: 3,
        date: "2026-03-06",
        diagnosis:
          "Skin healed completely. Parents advised on preventive diaper care practices.",
        medicines: [],
      },
    ],
  },
    {
    id: "MCP125",
    name: "Reyansh Gupta",
    age: 6,
    gender: "Male",
    disease: "Acute Sinusitis",
    doctorId: "MCD017",
    doctorName: "Dr. Rohan Mehta",
    history: [
      {
        id: 1,
        date: "2026-01-26",
        diagnosis:
          "Child presented with nasal congestion, facial pain, thick nasal discharge, and low-grade fever. Acute bacterial sinusitis was suspected.",
        medicines: [
          "Amoxicillin-Clavulanate Syrup",
          "Paracetamol Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-02-05",
        diagnosis:
          "Facial pain and nasal discharge reduced significantly after completing the antibiotic course.",
        medicines: [
          "Saline Nasal Spray",
        ],
      },
      {
        id: 3,
        date: "2026-02-22",
        diagnosis:
          "Child recovered completely with clear nasal passages and no residual symptoms.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP126",
    name: "Anvi Reddy",
    age: 9,
    gender: "Female",
    disease: "Mild Pneumonia",
    doctorId: "MCD020",
    doctorName: "Dr. Kavya Menon",
    history: [
      {
        id: 1,
        date: "2026-02-02",
        diagnosis:
          "Child presented with fever, productive cough, and fast breathing. Chest examination suggested mild community-acquired pneumonia.",
        medicines: [
          "Amoxicillin Syrup",
          "Paracetamol Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-02-11",
        diagnosis:
          "Fever subsided and cough improved after antibiotic treatment. Chest auscultation showed marked improvement.",
        medicines: [
          "Amoxicillin Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-03-01",
        diagnosis:
          "Child recovered completely with normal respiratory examination and activity level.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP127",
    name: "Atharv Nair",
    age: 14,
    gender: "Male",
    disease: "Seasonal Allergic Conjunctivitis",
    doctorId: "MCD018",
    doctorName: "Dr. Meera Iyer",
    history: [
      {
        id: 1,
        date: "2026-01-30",
        diagnosis:
          "Child complained of itchy, watery, and red eyes during pollen season. Clinical findings suggested allergic conjunctivitis.",
        medicines: [
          "Olopatadine Eye Drops",
          "Cetirizine Tablet 5mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-04",
        diagnosis:
          "Eye itching and redness reduced significantly with medication and allergen avoidance.",
        medicines: [
          "Olopatadine Eye Drops",
        ],
      },
      {
        id: 3,
        date: "2026-06-08",
        diagnosis:
          "No recurrence of symptoms during follow-up. Continue preventive measures during allergy season.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP128",
    name: "Sara Iyer",
    age: 1,
    gender: "Female",
    disease: "Viral Upper Respiratory Infection",
    doctorId: "MCD019",
    doctorName: "Dr. Arvind Rao",
    history: [
      {
        id: 1,
        date: "2026-02-14",
        diagnosis:
          "Infant presented with runny nose, mild fever, and cough. Clinical examination was consistent with a viral upper respiratory infection.",
        medicines: [
          "Paracetamol Drops",
          "Saline Nasal Drops",
        ],
      },
      {
        id: 2,
        date: "2026-02-20",
        diagnosis:
          "Fever resolved and feeding improved. Nasal congestion reduced with supportive care.",
        medicines: [
          "Saline Nasal Drops",
        ],
      },
      {
        id: 3,
        date: "2026-03-05",
        diagnosis:
          "Infant recovered completely with normal feeding and activity.",
        medicines: [],
      },
    ],
  },
    {
    id: "MCP129",
    name: "Ayaan Verma",
    age: 10,
    gender: "Male",
    disease: "Acute Pharyngitis",
    doctorId: "MCD017",
    doctorName: "Dr. Rohan Mehta",
    history: [
      {
        id: 1,
        date: "2026-01-19",
        diagnosis:
          "Child presented with sore throat, fever, and painful swallowing. Examination revealed inflamed pharynx without complications.",
        medicines: [
          "Amoxicillin Syrup",
          "Paracetamol Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-01-28",
        diagnosis:
          "Throat pain reduced significantly after treatment. Child resumed a normal diet.",
        medicines: [
          "Amoxicillin Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-02-14",
        diagnosis:
          "Complete recovery observed with no recurrence of throat symptoms.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP130",
    name: "Riya Menon",
    age: 8,
    gender: "Female",
    disease: "Acute Otitis Media",
    doctorId: "MCD018",
    doctorName: "Dr. Meera Iyer",
    history: [
      {
        id: 1,
        date: "2026-02-01",
        diagnosis:
          "Child presented with left ear pain, fever, and difficulty sleeping. Otoscopic examination confirmed acute otitis media.",
        medicines: [
          "Amoxicillin Syrup",
          "Paracetamol Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-02-10",
        diagnosis:
          "Ear pain resolved with antibiotic therapy. Tympanic membrane appeared healthy during follow-up.",
        medicines: [
          "Amoxicillin Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-02-27",
        diagnosis:
          "Child recovered completely with normal hearing and ear examination.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP131",
    name: "Dhruv Patel",
    age: 12,
    gender: "Male",
    disease: "Acute Gastroenteritis",
    doctorId: "MCD019",
    doctorName: "Dr. Arvind Rao",
    history: [
      {
        id: 1,
        date: "2026-01-23",
        diagnosis:
          "Child presented with vomiting, loose stools, and moderate dehydration after consuming outside food.",
        medicines: [
          "ORS",
          "Zinc Syrup",
          "Probiotic Sachet",
        ],
      },
      {
        id: 2,
        date: "2026-01-29",
        diagnosis:
          "Vomiting stopped and hydration improved with oral rehydration therapy.",
        medicines: [
          "ORS",
          "Zinc Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-02-13",
        diagnosis:
          "Normal bowel habits restored. Child remained active with a good appetite.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP132",
    name: "Ira Sharma",
    age: 4,
    gender: "Female",
    disease: "Bronchial Asthma",
    doctorId: "MCD020",
    doctorName: "Dr. Kavya Menon",
    history: [
      {
        id: 1,
        date: "2026-02-07",
        diagnosis:
          "Child developed wheezing and cough after exposure to dust. Mild asthma exacerbation was diagnosed.",
        medicines: [
          "Salbutamol Nebulization",
          "Montelukast 4mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-03",
        diagnosis:
          "Respiratory symptoms improved with controller therapy and avoidance of known triggers.",
        medicines: [
          "Montelukast 4mg",
          "Salbutamol Inhaler",
        ],
      },
      {
        id: 3,
        date: "2026-05-21",
        diagnosis:
          "No wheezing episodes reported. Child remained active with normal respiratory examination.",
        medicines: [
          "Montelukast 4mg",
        ],
      },
      {
        id: 4,
        date: "2026-07-30",
        diagnosis:
          "Asthma remained well controlled. Parents were advised to continue the asthma action plan.",
        medicines: [
          "Montelukast 4mg",
        ],
      },
    ],
  },
    {
    id: "MCP133",
    name: "Arnav Reddy",
    age: 11,
    gender: "Male",
    disease: "Acute Bronchitis",
    doctorId: "MCD020",
    doctorName: "Dr. Kavya Menon",
    history: [
      {
        id: 1,
        date: "2026-01-21",
        diagnosis:
          "Child presented with persistent cough, mild fever, and chest congestion for four days. Chest examination suggested acute bronchitis.",
        medicines: [
          "Ambroxol Syrup",
          "Paracetamol Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-01-31",
        diagnosis:
          "Cough reduced significantly after treatment. Chest auscultation was clear during follow-up.",
        medicines: [
          "Ambroxol Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-02-17",
        diagnosis:
          "Child recovered completely and resumed regular school activities.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP134",
    name: "Aadhya Nair",
    age: 7,
    gender: "Female",
    disease: "Mumps",
    doctorId: "MCD018",
    doctorName: "Dr. Meera Iyer",
    history: [
      {
        id: 1,
        date: "2026-02-06",
        diagnosis:
          "Child presented with painful swelling near the jaw and low-grade fever. Clinical findings confirmed mumps.",
        medicines: [
          "Paracetamol Syrup",
          "Ibuprofen Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-02-16",
        diagnosis:
          "Facial swelling reduced significantly. Child tolerated soft foods without difficulty.",
        medicines: [
          "Paracetamol Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-03-04",
        diagnosis:
          "Complete recovery noted without complications. Routine immunization schedule was reviewed.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP135",
    name: "Vedant Sharma",
    age: 13,
    gender: "Male",
    disease: "Acute Appendicitis (Post-operative Follow-up)",
    doctorId: "MCD019",
    doctorName: "Dr. Arvind Rao",
    history: [
      {
        id: 1,
        date: "2026-01-26",
        diagnosis:
          "Child underwent laparoscopic appendectomy for acute appendicitis. Post-operative recovery was satisfactory.",
        medicines: [
          "Paracetamol 500mg",
          "Amoxicillin-Clavulanate 625mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-05",
        diagnosis:
          "Surgical wound healed well without signs of infection. Child resumed light daily activities.",
        medicines: [
          "Paracetamol 500mg",
        ],
      },
      {
        id: 3,
        date: "2026-02-24",
        diagnosis:
          "Complete recovery observed. Child was cleared for normal physical activity.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP136",
    name: "Siya Patel",
    age: 5,
    gender: "Female",
    disease: "Scabies",
    doctorId: "MCD017",
    doctorName: "Dr. Rohan Mehta",
    history: [
      {
        id: 1,
        date: "2026-02-09",
        diagnosis:
          "Child presented with intense itching and a papular rash involving the hands and wrists. Clinical findings suggested scabies.",
        medicines: [
          "Permethrin 5% Cream",
          "Cetirizine Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-02-20",
        diagnosis:
          "Itching reduced significantly after treatment. Family members were advised to undergo simultaneous treatment.",
        medicines: [
          "Permethrin 5% Cream",
        ],
      },
      {
        id: 3,
        date: "2026-03-10",
        diagnosis:
          "Skin lesions resolved completely with no recurrence of symptoms.",
        medicines: [],
      },
    ],
  },
    {
    id: "MCP137",
    name: "Yash Verma",
    age: 9,
    gender: "Male",
    disease: "Acute Viral Conjunctivitis",
    doctorId: "MCD018",
    doctorName: "Dr. Meera Iyer",
    history: [
      {
        id: 1,
        date: "2026-01-24",
        diagnosis:
          "Child presented with redness, watering, and irritation in both eyes. Clinical examination suggested viral conjunctivitis.",
        medicines: [
          "Lubricating Eye Drops",
          "Paracetamol Syrup",
        ],
      },
      {
        id: 2,
        date: "2026-02-02",
        diagnosis:
          "Eye redness reduced considerably. Hygiene measures were reinforced to prevent transmission.",
        medicines: [
          "Lubricating Eye Drops",
        ],
      },
      {
        id: 3,
        date: "2026-02-16",
        diagnosis:
          "Complete recovery noted with normal ocular examination and no visual complaints.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP138",
    name: "Anika Rao",
    age: 6,
    gender: "Female",
    disease: "Acute Urticaria",
    doctorId: "MCD017",
    doctorName: "Dr. Rohan Mehta",
    history: [
      {
        id: 1,
        date: "2026-02-06",
        diagnosis:
          "Child developed itchy raised skin rashes shortly after consuming packaged food. Acute urticaria was diagnosed.",
        medicines: [
          "Cetirizine Syrup",
          "Calamine Lotion",
        ],
      },
      {
        id: 2,
        date: "2026-02-13",
        diagnosis:
          "Skin rash resolved completely after antihistamine therapy. Parents were advised to avoid suspected food triggers.",
        medicines: [
          "Cetirizine Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-03-01",
        diagnosis:
          "No recurrence of allergic rash during follow-up.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP139",
    name: "Dev Kapoor",
    age: 15,
    gender: "Male",
    disease: "Infectious Mononucleosis",
    doctorId: "MCD020",
    doctorName: "Dr. Kavya Menon",
    history: [
      {
        id: 1,
        date: "2026-01-28",
        diagnosis:
          "Teenager presented with prolonged fever, sore throat, fatigue, and enlarged cervical lymph nodes. Clinical findings were consistent with infectious mononucleosis.",
        medicines: [
          "Paracetamol 500mg",
          "Multivitamin",
        ],
      },
      {
        id: 2,
        date: "2026-02-12",
        diagnosis:
          "Fever resolved and throat pain improved. Child was advised to avoid strenuous physical activity during recovery.",
        medicines: [
          "Paracetamol 500mg",
        ],
      },
      {
        id: 3,
        date: "2026-03-08",
        diagnosis:
          "Recovered completely with normal energy levels and no residual symptoms.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP140",
    name: "Misha Iyer",
    age: 3,
    gender: "Female",
    disease: "Acute Viral Gastroenteritis",
    doctorId: "MCD019",
    doctorName: "Dr. Arvind Rao",
    history: [
      {
        id: 1,
        date: "2026-02-11",
        diagnosis:
          "Child presented with vomiting, loose stools, and mild dehydration. Viral gastroenteritis was diagnosed.",
        medicines: [
          "ORS",
          "Zinc Syrup",
          "Probiotic Sachet",
        ],
      },
      {
        id: 2,
        date: "2026-02-18",
        diagnosis:
          "Vomiting stopped and hydration improved. Child tolerated oral feeds well.",
        medicines: [
          "ORS",
          "Zinc Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-03-04",
        diagnosis:
          "Complete recovery achieved with normal bowel habits and appetite.",
        medicines: [],
      },
    ],
  },
    {
    id: "MCP141",
    name: "Ramesh Naidu",
    age: 59,
    gender: "Male",
    disease: "Chronic Obstructive Pulmonary Disease (COPD)",
    doctorId: "MCD022",
    doctorName: "Dr. Neha Kapoor",
    history: [
      {
        id: 1,
        date: "2026-01-18",
        diagnosis:
          "Patient presented with chronic productive cough, exertional breathlessness, and a history of long-term smoking. Spirometry confirmed moderate COPD.",
        medicines: [
          "Tiotropium Inhaler",
          "Salbutamol Inhaler",
        ],
      },
      {
        id: 2,
        date: "2026-03-15",
        diagnosis:
          "Breathlessness improved after inhaler therapy and pulmonary rehabilitation. Smoking cessation counseling was reinforced.",
        medicines: [
          "Tiotropium Inhaler",
          "Salbutamol Inhaler",
        ],
      },
      {
        id: 3,
        date: "2026-06-10",
        diagnosis:
          "Symptoms remained stable with no recent exacerbations. Continue inhaler therapy and breathing exercises.",
        medicines: [
          "Tiotropium Inhaler",
        ],
      },
      {
        id: 4,
        date: "2026-08-02",
        diagnosis:
          "Pulmonary function remained stable. Annual influenza vaccination was recommended.",
        medicines: [
          "Tiotropium Inhaler",
        ],
      },
    ],
  },
  {
    id: "MCP142",
    name: "Pooja Reddy",
    age: 35,
    gender: "Female",
    disease: "Bronchial Asthma",
    doctorId: "MCD021",
    doctorName: "Dr. Ravi Prakash",
    history: [
      {
        id: 1,
        date: "2026-02-02",
        diagnosis:
          "Patient experienced recurrent wheezing, chest tightness, and shortness of breath triggered by dust exposure.",
        medicines: [
          "Budesonide Inhaler",
          "Salbutamol Inhaler",
        ],
      },
      {
        id: 2,
        date: "2026-03-29",
        diagnosis:
          "Asthma symptoms remained well controlled with regular inhaler use and trigger avoidance.",
        medicines: [
          "Budesonide Inhaler",
          "Salbutamol Inhaler",
        ],
      },
      {
        id: 3,
        date: "2026-06-21",
        diagnosis:
          "No asthma attacks reported since the previous visit. Peak expiratory flow improved.",
        medicines: [
          "Budesonide Inhaler",
        ],
      },
    ],
  },
  {
    id: "MCP143",
    name: "Suresh Menon",
    age: 63,
    gender: "Male",
    disease: "Community Acquired Pneumonia",
    doctorId: "MCD024",
    doctorName: "Dr. Aditi Rao",
    history: [
      {
        id: 1,
        date: "2026-01-25",
        diagnosis:
          "Patient presented with high fever, productive cough, and pleuritic chest pain. Chest X-ray confirmed right lower lobe pneumonia.",
        medicines: [
          "Amoxicillin-Clavulanate 625mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-06",
        diagnosis:
          "Fever resolved and cough improved significantly after completing antibiotic therapy.",
        medicines: [
          "Ambroxol Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-03-01",
        diagnosis:
          "Chest examination was clear with complete clinical recovery. Follow-up chest X-ray was satisfactory.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP144",
    name: "Ananya Sharma",
    age: 42,
    gender: "Female",
    disease: "Pulmonary Tuberculosis",
    doctorId: "MCD023",
    doctorName: "Dr. Vikram Sethi",
    history: [
      {
        id: 1,
        date: "2026-01-14",
        diagnosis:
          "Patient presented with chronic cough, weight loss, evening fever, and sputum positivity for pulmonary tuberculosis.",
        medicines: [
          "HRZE Regimen",
          "Pyridoxine 10mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-18",
        diagnosis:
          "Cough reduced significantly with good adherence to anti-tubercular therapy. Weight gain was observed.",
        medicines: [
          "Continuation Phase ATT",
          "Pyridoxine 10mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-24",
        diagnosis:
          "Patient remained clinically stable with sputum conversion achieved. Continue treatment as scheduled.",
        medicines: [
          "Continuation Phase ATT",
        ],
      },
      {
        id: 4,
        date: "2026-08-04",
        diagnosis:
          "Treatment response remained satisfactory with no drug-related complications.",
        medicines: [
          "Continuation Phase ATT",
        ],
      },
    ],
  },
    {
    id: "MCP145",
    name: "Prakash Kumar",
    age: 52,
    gender: "Male",
    disease: "Acute Bronchitis",
    doctorId: "MCD021",
    doctorName: "Dr. Ravi Prakash",
    history: [
      {
        id: 1,
        date: "2026-01-20",
        diagnosis:
          "Patient presented with persistent cough, mild fever, and chest congestion for one week. Clinical findings were consistent with acute bronchitis.",
        medicines: [
          "Amoxicillin-Clavulanate 625mg",
          "Ambroxol Syrup",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-02-01",
        diagnosis:
          "Cough reduced significantly after treatment. Chest examination was clear with no wheezing.",
        medicines: [
          "Ambroxol Syrup",
        ],
      },
      {
        id: 3,
        date: "2026-02-20",
        diagnosis:
          "Patient recovered completely and resumed normal daily activities.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP146",
    name: "Divya Menon",
    age: 46,
    gender: "Female",
    disease: "Pleural Effusion",
    doctorId: "MCD024",
    doctorName: "Dr. Aditi Rao",
    history: [
      {
        id: 1,
        date: "2026-02-04",
        diagnosis:
          "Patient complained of progressive breathlessness and chest heaviness. Chest imaging confirmed moderate right-sided pleural effusion.",
        medicines: [
          "Furosemide 40mg",
          "Paracetamol 650mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-17",
        diagnosis:
          "Symptoms improved after therapeutic pleural aspiration. Follow-up imaging showed significant reduction in fluid.",
        medicines: [
          "Furosemide 40mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-05",
        diagnosis:
          "No recurrence of pleural fluid accumulation. Respiratory symptoms resolved completely.",
        medicines: [],
      },
    ],
  },
  {
    id: "MCP147",
    name: "Harish Patel",
    age: 67,
    gender: "Male",
    disease: "Obstructive Sleep Apnea",
    doctorId: "MCD022",
    doctorName: "Dr. Neha Kapoor",
    history: [
      {
        id: 1,
        date: "2026-01-23",
        diagnosis:
          "Patient reported loud snoring, daytime sleepiness, and witnessed apneic episodes. Sleep study confirmed moderate obstructive sleep apnea.",
        medicines: [
          "CPAP Therapy",
        ],
      },
      {
        id: 2,
        date: "2026-03-14",
        diagnosis:
          "Daytime fatigue reduced significantly after regular CPAP use. Sleep quality improved.",
        medicines: [
          "CPAP Therapy",
        ],
      },
      {
        id: 3,
        date: "2026-06-18",
        diagnosis:
          "Patient remained compliant with CPAP therapy and reported sustained symptomatic improvement.",
        medicines: [
          "CPAP Therapy",
        ],
      },
      {
        id: 4,
        date: "2026-08-03",
        diagnosis:
          "Condition remained stable with good adherence to CPAP and weight management advice.",
        medicines: [
          "CPAP Therapy",
        ],
      },
    ],
  },
  {
    id: "MCP148",
    name: "Nisha Reddy",
    age: 39,
    gender: "Female",
    disease: "Interstitial Lung Disease",
    doctorId: "MCD023",
    doctorName: "Dr. Vikram Sethi",
    history: [
      {
        id: 1,
        date: "2026-01-16",
        diagnosis:
          "Patient presented with progressive exertional breathlessness and dry cough. HRCT findings were consistent with interstitial lung disease.",
        medicines: [
          "Prednisolone 20mg",
          "Pirfenidone 200mg",
        ],
      },
      {
        id: 2,
        date: "2026-03-22",
        diagnosis:
          "Breathlessness improved slightly after treatment. Pulmonary rehabilitation was advised.",
        medicines: [
          "Pirfenidone 200mg",
          "Prednisolone 10mg",
        ],
      },
      {
        id: 3,
        date: "2026-06-25",
        diagnosis:
          "Disease remained clinically stable with no significant decline in lung function.",
        medicines: [
          "Pirfenidone 200mg",
        ],
      },
      {
        id: 4,
        date: "2026-08-05",
        diagnosis:
          "Continue antifibrotic therapy and regular pulmonary function monitoring.",
        medicines: [
          "Pirfenidone 200mg",
        ],
      },
    ],
  },
  {
  id: "MCP149",
  name: "Rohit Sharma",
  age: 58,
  gender: "Male",
  disease: "Chronic Bronchitis",
  doctorId: "MCD021",
  doctorName: "Dr. Ravi Prakash",
  history: [
    {
      id: 1,
      date: "2026-01-15",
      diagnosis:
        "Patient presented with chronic productive cough lasting over three months with intermittent wheezing. History of smoking was noted.",
      medicines: [
        "Tiotropium Inhaler",
        "Ambroxol Syrup",
      ],
    },
    {
      id: 2,
      date: "2026-03-09",
      diagnosis:
        "Productive cough reduced after inhaler therapy and smoking cessation counseling.",
      medicines: [
        "Tiotropium Inhaler",
      ],
    },
    {
      id: 3,
      date: "2026-06-06",
      diagnosis:
        "Symptoms remained stable without acute exacerbations. Continue pulmonary rehabilitation.",
      medicines: [
        "Tiotropium Inhaler",
      ],
    },
  ],
},
{
  id: "MCP150",
  name: "Kavya Nair",
  age: 44,
  gender: "Female",
  disease: "Bronchiectasis",
  doctorId: "MCD024",
  doctorName: "Dr. Aditi Rao",
  history: [
    {
      id: 1,
      date: "2026-02-03",
      diagnosis:
        "Patient complained of chronic productive cough with recurrent chest infections. HRCT confirmed bronchiectasis.",
      medicines: [
        "Azithromycin 500mg",
        "Ambroxol Syrup",
      ],
    },
    {
      id: 2,
      date: "2026-03-28",
      diagnosis:
        "Sputum production reduced after antibiotic therapy and chest physiotherapy.",
      medicines: [
        "Azithromycin 500mg",
      ],
    },
    {
      id: 3,
      date: "2026-06-17",
      diagnosis:
        "Condition remained stable with improved airway clearance and no new infections.",
      medicines: [
        "Chest Physiotherapy",
      ],
    },
    {
      id: 4,
      date: "2026-08-02",
      diagnosis:
        "Patient maintained stable respiratory function. Continue airway clearance exercises.",
      medicines: [
        "Chest Physiotherapy",
      ],
    },
  ],
},
{
  id: "MCP151",
  name: "Mahesh Verma",
  age: 61,
  gender: "Male",
  disease: "Pulmonary Fibrosis",
  doctorId: "MCD023",
  doctorName: "Dr. Vikram Sethi",
  history: [
    {
      id: 1,
      date: "2026-01-19",
      diagnosis:
        "Patient presented with progressive breathlessness and persistent dry cough. HRCT findings were consistent with pulmonary fibrosis.",
      medicines: [
        "Pirfenidone 200mg",
        "Prednisolone 10mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-18",
      diagnosis:
        "Symptoms remained stable with antifibrotic therapy. Pulmonary rehabilitation continued.",
      medicines: [
        "Pirfenidone 200mg",
      ],
    },
    {
      id: 3,
      date: "2026-06-20",
      diagnosis:
        "No significant decline in pulmonary function tests. Continue long-term treatment.",
      medicines: [
        "Pirfenidone 200mg",
      ],
    },
    {
      id: 4,
      date: "2026-08-04",
      diagnosis:
        "Disease remained clinically stable with no acute respiratory deterioration.",
      medicines: [
        "Pirfenidone 200mg",
      ],
    },
  ],
},
{
  id: "MCP152",
  name: "Sneha Kapoor",
  age: 37,
  gender: "Female",
  disease: "Allergic Asthma",
  doctorId: "MCD022",
  doctorName: "Dr. Neha Kapoor",
  history: [
    {
      id: 1,
      date: "2026-01-27",
      diagnosis:
        "Patient experienced wheezing and chest tightness after exposure to pollen and dust. Allergic asthma was diagnosed.",
      medicines: [
        "Budesonide Inhaler",
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-26",
      diagnosis:
        "Asthma remained well controlled with inhaled corticosteroids and allergen avoidance.",
      medicines: [
        "Budesonide Inhaler",
        "Salbutamol Inhaler",
      ],
    },
    {
      id: 3,
      date: "2026-06-23",
      diagnosis:
        "No asthma exacerbations since the previous visit. Continue maintenance therapy.",
      medicines: [
        "Budesonide Inhaler",
      ],
    },
  ],
},
{
  id: "MCP153",
  name: "Srinivas Rao",
  age: 56,
  gender: "Male",
  disease: "Pulmonary Embolism (Follow-up)",
  doctorId: "MCD023",
  doctorName: "Dr. Vikram Sethi",
  history: [
    {
      id: 1,
      date: "2026-01-18",
      diagnosis:
        "Patient was reviewed following hospitalization for pulmonary embolism. Respiratory status remained stable on anticoagulation therapy.",
      medicines: [
        "Apixaban 5mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-20",
      diagnosis:
        "No recurrence of chest pain or breathlessness. Oxygen saturation remained normal during follow-up.",
      medicines: [
        "Apixaban 5mg",
      ],
    },
    {
      id: 3,
      date: "2026-06-18",
      diagnosis:
        "Patient remained clinically stable with good compliance to anticoagulant therapy.",
      medicines: [
        "Apixaban 5mg",
      ],
    },
      {
      id: 4,
      date: "2026-08-03",
      diagnosis:
        "No evidence of recurrent thromboembolic events. Continue anticoagulation as advised.",
      medicines: [
        "Apixaban 5mg",
      ],
    },
  ],
},
{
  id: "MCP154",
  name: "Harini Menon",
  age: 43,
  gender: "Female",
  disease: "Pneumothorax (Post-treatment Follow-up)",
  doctorId: "MCD024",
  doctorName: "Dr. Aditi Rao",
  history: [
    {
      id: 1,
      date: "2026-02-01",
      diagnosis:
        "Patient reviewed after successful treatment of spontaneous pneumothorax with intercostal drainage.",
      medicines: [
        "Paracetamol 650mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-15",
      diagnosis:
        "Chest X-ray confirmed complete lung expansion. Patient denied breathlessness or chest pain.",
      medicines: [],
    },
    {
      id: 3,
      date: "2026-06-08",
      diagnosis:
        "No recurrence of pneumothorax. Patient resumed routine activities without respiratory symptoms.",
      medicines: [],
    },
  ],
},
{
  id: "MCP155",
  name: "Rakesh Patel",
  age: 60,
  gender: "Male",
  disease: "Lung Abscess",
  doctorId: "MCD021",
  doctorName: "Dr. Ravi Prakash",
  history: [
    {
      id: 1,
      date: "2026-01-22",
      diagnosis:
        "Patient presented with productive cough, fever, foul-smelling sputum, and weight loss. Imaging confirmed a lung abscess.",
      medicines: [
        "Amoxicillin-Clavulanate 625mg",
        "Metronidazole 400mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-12",
      diagnosis:
        "Symptoms improved considerably after prolonged antibiotic therapy. Follow-up imaging showed reduction in abscess size.",
      medicines: [
        "Amoxicillin-Clavulanate 625mg",
      ],
    },
    {
      id: 3,
      date: "2026-06-15",
      diagnosis:
        "Patient recovered well with complete resolution of infection on repeat imaging.",
      medicines: [],
    },
  ],
},
{
  id: "MCP156",
  name: "Priyanka Sharma",
  age: 41,
  gender: "Female",
  disease: "Eosinophilic Asthma",
  doctorId: "MCD022",
  doctorName: "Dr. Neha Kapoor",
  history: [
    {
      id: 1,
      date: "2026-01-29",
      diagnosis:
        "Patient presented with recurrent wheezing and elevated eosinophil count. Eosinophilic asthma was diagnosed.",
      medicines: [
        "Budesonide-Formoterol Inhaler",
        "Montelukast 10mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-25",
      diagnosis:
        "Symptoms improved significantly with inhaled corticosteroids. Peak flow readings showed improvement.",
      medicines: [
        "Budesonide-Formoterol Inhaler",
      ],
    },
    {
      id: 3,
      date: "2026-06-27",
      diagnosis:
        "Asthma remained well controlled without exacerbations. Continue maintenance therapy.",
      medicines: [
        "Budesonide-Formoterol Inhaler",
      ],
    },
  ],
},
{
  id: "MCP157",
  name: "Anil Kumar",
  age: 65,
  gender: "Male",
  disease: "Emphysema",
  doctorId: "MCD022",
  doctorName: "Dr. Neha Kapoor",
  history: [
    {
      id: 1,
      date: "2026-01-17",
      diagnosis:
        "Patient presented with progressive breathlessness and reduced exercise tolerance. HRCT and spirometry findings were consistent with emphysema.",
      medicines: [
        "Tiotropium Inhaler",
        "Salbutamol Inhaler",
      ],
    },
    {
      id: 2,
      date: "2026-03-16",
      diagnosis:
        "Breathing improved with bronchodilator therapy and pulmonary rehabilitation.",
      medicines: [
        "Tiotropium Inhaler",
      ],
    },
    {
      id: 3,
      date: "2026-06-12",
      diagnosis:
        "Respiratory symptoms remained stable without acute exacerbations.",
      medicines: [
        "Tiotropium Inhaler",
      ],
    },
    {
      id: 4,
      date: "2026-08-04",
      diagnosis:
        "Patient continued maintenance therapy with stable pulmonary function.",
      medicines: [
        "Tiotropium Inhaler",
      ],
    },
  ],
},
{
  id: "MCP158",
  name: "Deepa Reddy",
  age: 38,
  gender: "Female",
  disease: "Post-COVID Lung Disease",
  doctorId: "MCD023",
  doctorName: "Dr. Vikram Sethi",
  history: [
    {
      id: 1,
      date: "2026-02-06",
      diagnosis:
        "Patient reported persistent breathlessness and fatigue following recovery from COVID-19 infection.",
      medicines: [
        "Budesonide Inhaler",
        "Vitamin D3",
      ],
    },
    {
      id: 2,
      date: "2026-03-30",
      diagnosis:
        "Exercise tolerance improved after pulmonary rehabilitation. Chest imaging showed gradual recovery.",
      medicines: [
        "Budesonide Inhaler",
      ],
    },
    {
      id: 3,
      date: "2026-06-22",
      diagnosis:
        "Patient reported only occasional exertional breathlessness. Continue breathing exercises.",
      medicines: [],
    },
  ],
},
{
  id: "MCP159",
  name: "Venkatesh Sharma",
  age: 57,
  gender: "Male",
  disease: "Occupational Lung Disease",
  doctorId: "MCD024",
  doctorName: "Dr. Aditi Rao",
  history: [
    {
      id: 1,
      date: "2026-01-20",
      diagnosis:
        "Patient with prolonged industrial dust exposure presented with chronic cough and exertional breathlessness.",
      medicines: [
        "Salbutamol Inhaler",
        "N-Acetylcysteine 600mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-18",
      diagnosis:
        "Respiratory symptoms improved after workplace exposure reduction and medication.",
      medicines: [
        "N-Acetylcysteine 600mg",
      ],
    },
    {
      id: 3,
      date: "2026-06-16",
      diagnosis:
        "Pulmonary function remained stable. Advised continued use of respiratory protective equipment.",
      medicines: [],
    },
  ],
},
{
  id: "MCP160",
  name: "Shweta Menon",
  age: 36,
  gender: "Female",
  disease: "Moderate Persistent Asthma",
  doctorId: "MCD021",
  doctorName: "Dr. Ravi Prakash",
  history: [
    {
      id: 1,
      date: "2026-02-02",
      diagnosis:
        "Patient presented with recurrent wheezing, nocturnal cough, and exertional breathlessness. Moderate persistent asthma was diagnosed.",
      medicines: [
        "Budesonide-Formoterol Inhaler",
        "Salbutamol Inhaler",
      ],
    },
    {
      id: 2,
      date: "2026-03-28",
      diagnosis:
        "Asthma symptoms became well controlled with regular controller therapy and inhaler education.",
      medicines: [
        "Budesonide-Formoterol Inhaler",
      ],
    },
    {
      id: 3,
      date: "2026-06-24",
      diagnosis:
        "No exacerbations reported. Lung function remained within expected range.",
      medicines: [
        "Budesonide-Formoterol Inhaler",
      ],
    },
    {
      id: 4,
      date: "2026-08-05",
      diagnosis:
        "Patient remained clinically stable with excellent adherence to maintenance inhaler therapy.",
      medicines: [
        "Budesonide-Formoterol Inhaler",
      ],
    },
  ],
},
{
  id: "MCP161",
  name: "Kishore Rao",
  age: 62,
  gender: "Male",
  disease: "Pulmonary Hypertension",
  doctorId: "MCD023",
  doctorName: "Dr. Vikram Sethi",
  history: [
    {
      id: 1,
      date: "2026-01-16",
      diagnosis:
        "Patient presented with progressive exertional breathlessness and fatigue. Echocardiography findings were suggestive of pulmonary hypertension.",
      medicines: [
        "Sildenafil 20mg",
        "Furosemide 40mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-19",
      diagnosis:
        "Exercise tolerance improved with medical therapy. Breathlessness reduced during routine activities.",
      medicines: [
        "Sildenafil 20mg",
      ],
    },
    {
      id: 3,
      date: "2026-06-14",
      diagnosis:
        "Condition remained stable with no signs of right heart failure. Continue regular monitoring.",
      medicines: [
        "Sildenafil 20mg",
      ],
    },
  ],
},
{
  id: "MCP162",
  name: "Aishwarya Patel",
  age: 40,
  gender: "Female",
  disease: "Chronic Cough Syndrome",
  doctorId: "MCD021",
  doctorName: "Dr. Ravi Prakash",
  history: [
    {
      id: 1,
      date: "2026-02-04",
      diagnosis:
        "Patient presented with persistent dry cough lasting over eight weeks. Evaluation excluded active infection and asthma.",
      medicines: [
        "Levocetirizine 5mg",
        "Pantoprazole 40mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-27",
      diagnosis:
        "Cough frequency reduced significantly after treatment of upper airway cough syndrome and reflux symptoms.",
      medicines: [
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 3,
      date: "2026-06-18",
      diagnosis:
        "Patient reported only occasional dry cough. Continue lifestyle modifications.",
      medicines: [],
    },
  ],
},
{
  id: "MCP163",
  name: "Mohan Kumar",
  age: 55,
  gender: "Male",
  disease: "Severe COPD",
  doctorId: "MCD022",
  doctorName: "Dr. Neha Kapoor",
  history: [
    {
      id: 1,
      date: "2026-01-21",
      diagnosis:
        "Patient presented with worsening breathlessness and chronic productive cough. Spirometry confirmed severe COPD.",
      medicines: [
        "Tiotropium Inhaler",
        "Budesonide-Formoterol Inhaler",
      ],
    },
    {
      id: 2,
      date: "2026-03-17",
      diagnosis:
        "Symptoms improved after optimization of inhaler therapy and pulmonary rehabilitation.",
      medicines: [
        "Tiotropium Inhaler",
        "Budesonide-Formoterol Inhaler",
      ],
    },
    {
      id: 3,
      date: "2026-06-20",
      diagnosis:
        "No acute exacerbations since the previous visit. Continue smoking cessation and inhaler therapy.",
      medicines: [
        "Tiotropium Inhaler",
        "Budesonide-Formoterol Inhaler",
      ],
    },
    {
      id: 4,
      date: "2026-08-04",
      diagnosis:
        "Patient remained clinically stable with satisfactory oxygen saturation at rest.",
      medicines: [
        "Tiotropium Inhaler",
      ],
    },
  ],
},
{
  id: "MCP164",
  name: "Neha Verma",
  age: 34,
  gender: "Female",
  disease: "Acute Viral Bronchitis",
  doctorId: "MCD024",
  doctorName: "Dr. Aditi Rao",
  history: [
    {
      id: 1,
      date: "2026-02-08",
      diagnosis:
        "Patient presented with dry cough, sore throat, and mild fever. Clinical examination suggested acute viral bronchitis.",
      medicines: [
        "Paracetamol 650mg",
        "Ambroxol Syrup",
      ],
    },
    {
      id: 2,
      date: "2026-02-17",
      diagnosis:
        "Fever resolved and cough reduced considerably with supportive care.",
      medicines: [
        "Ambroxol Syrup",
      ],
    },
    {
      id: 3,
      date: "2026-03-06",
      diagnosis:
        "Patient recovered completely with clear chest examination.",
      medicines: [],
    },
  ],
},
{
  id: "MCP165",
  name: "Rajesh Kulkarni",
  age: 60,
  gender: "Male",
  disease: "Hypersensitivity Pneumonitis",
  doctorId: "MCD023",
  doctorName: "Dr. Vikram Sethi",
  history: [
    {
      id: 1,
      date: "2026-01-18",
      diagnosis:
        "Patient presented with dry cough and exertional breathlessness after prolonged exposure to organic dust. HRCT findings suggested hypersensitivity pneumonitis.",
      medicines: [
        "Prednisolone 20mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-16",
      diagnosis:
        "Respiratory symptoms improved after avoiding the triggering exposure and corticosteroid therapy.",
      medicines: [
        "Prednisolone 10mg",
      ],
    },
    {
      id: 3,
      date: "2026-06-19",
      diagnosis:
        "Patient remained clinically stable with improved pulmonary function.",
      medicines: [
        "Prednisolone 10mg",
      ],
    },
  ],
},
{
  id: "MCP166",
  name: "Pallavi Nair",
  age: 45,
  gender: "Female",
  disease: "Post-Tuberculosis Lung Disease",
  doctorId: "MCD024",
  doctorName: "Dr. Aditi Rao",
  history: [
    {
      id: 1,
      date: "2026-02-02",
      diagnosis:
        "Patient attended follow-up after completing anti-tubercular therapy. Residual breathlessness was attributed to post-tuberculosis lung damage.",
      medicines: [
        "Tiotropium Inhaler",
        "Pulmonary Rehabilitation",
      ],
    },
    {
      id: 2,
      date: "2026-03-29",
      diagnosis:
        "Exercise tolerance improved with pulmonary rehabilitation. No evidence of active tuberculosis.",
      medicines: [
        "Tiotropium Inhaler",
      ],
    },
    {
      id: 3,
      date: "2026-06-25",
      diagnosis:
        "Respiratory symptoms remained stable with no recurrent infections.",
      medicines: [
        "Tiotropium Inhaler",
      ],
    },
  ],
},
{
  id: "MCP167",
  name: "Vijay Sharma",
  age: 58,
  gender: "Male",
  disease: "Pulmonary Sarcoidosis",
  doctorId: "MCD021",
  doctorName: "Dr. Ravi Prakash",
  history: [
    {
      id: 1,
      date: "2026-01-24",
      diagnosis:
        "Patient presented with persistent dry cough and bilateral hilar lymphadenopathy on imaging. Findings were consistent with pulmonary sarcoidosis.",
      medicines: [
        "Prednisolone 20mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-21",
      diagnosis:
        "Dry cough reduced significantly after corticosteroid therapy. Chest imaging showed interval improvement.",
      medicines: [
        "Prednisolone 10mg",
      ],
    },
    {
      id: 3,
      date: "2026-06-22",
      diagnosis:
        "Disease remained clinically stable without progression. Continue regular pulmonary follow-up.",
      medicines: [
        "Prednisolone 10mg",
      ],
    },
  ],
},
{
  id: "MCP168",
  name: "Shreya Reddy",
  age: 32,
  gender: "Female",
  disease: "Exercise-Induced Asthma",
  doctorId: "MCD022",
  doctorName: "Dr. Neha Kapoor",
  history: [
    {
      id: 1,
      date: "2026-02-06",
      diagnosis:
        "Patient reported wheezing and shortness of breath occurring only during vigorous physical activity. Exercise-induced asthma was diagnosed.",
      medicines: [
        "Salbutamol Inhaler",
      ],
    },
    {
      id: 2,
      date: "2026-03-30",
      diagnosis:
        "Symptoms were well controlled with pre-exercise bronchodilator use and breathing exercises.",
      medicines: [
        "Salbutamol Inhaler",
      ],
    },
    {
      id: 3,
      date: "2026-06-28",
      diagnosis:
        "No exercise-related asthma episodes reported since the previous visit. Continue current management.",
      medicines: [
        "Salbutamol Inhaler",
      ],
    },
    {
      id: 4,
      date: "2026-08-05",
      diagnosis:
        "Patient remained asymptomatic during exercise with excellent symptom control.",
      medicines: [
        "Salbutamol Inhaler",
      ],
    },
  ],
},
{
  id: "MCP169",
  name: "Rahul Sharma",
  age: 24,
  gender: "Male",
  disease: "Acne Vulgaris",
  doctorId: "MCD026",
  doctorName: "Dr. Ananya Kapoor",
  history: [
    {
      id: 1,
      date: "2026-01-14",
      diagnosis:
        "Patient presented with inflammatory acne involving the face and upper back. Moderate acne vulgaris was diagnosed.",
      medicines: [
        "Adapalene 0.1% Gel",
        "Clindamycin 1% Gel",
      ],
    },
    {
      id: 2,
      date: "2026-03-10",
      diagnosis:
        "Inflammatory lesions reduced significantly with topical treatment. Skin-care routine was reinforced.",
      medicines: [
        "Adapalene 0.1% Gel",
      ],
    },
    {
      id: 3,
      date: "2026-06-08",
      diagnosis:
        "Acne remained well controlled with only occasional new lesions. Continue maintenance therapy.",
      medicines: [
        "Adapalene 0.1% Gel",
      ],
    },
  ],
},
{
  id: "MCP170",
  name: "Priyanka Nair",
  age: 37,
  gender: "Female",
  disease: "Melasma",
  doctorId: "MCD028",
  doctorName: "Dr. Priyanka Mehta",
  history: [
    {
      id: 1,
      date: "2026-02-02",
      diagnosis:
        "Patient presented with symmetrical hyperpigmented patches over both cheeks. Clinical findings were consistent with melasma.",
      medicines: [
        "Hydroquinone 4% Cream",
        "Broad Spectrum Sunscreen SPF 50+",
      ],
    },
    {
      id: 2,
      date: "2026-03-30",
      diagnosis:
        "Facial pigmentation showed noticeable improvement with topical therapy and strict sun protection.",
      medicines: [
        "Hydroquinone 4% Cream",
        "Sunscreen SPF 50+",
      ],
    },
    {
      id: 3,
      date: "2026-06-21",
      diagnosis:
        "Pigmentation remained stable. Continue maintenance treatment and daily sunscreen use.",
      medicines: [
        "Azelaic Acid 20% Cream",
        "Sunscreen SPF 50+",
      ],
    },
  ],
},
{
  id: "MCP171",
  name: "Suresh Reddy",
  age: 48,
  gender: "Male",
  disease: "Psoriasis",
  doctorId: "MCD025",
  doctorName: "Dr. Arjun Khanna",
  history: [
    {
      id: 1,
      date: "2026-01-18",
      diagnosis:
        "Patient presented with erythematous scaly plaques over the elbows, knees, and scalp. Plaque psoriasis was diagnosed.",
      medicines: [
        "Clobetasol 0.05% Ointment",
        "Coal Tar Shampoo",
      ],
    },
    {
      id: 2,
      date: "2026-03-17",
      diagnosis:
        "Scaling and itching reduced significantly with topical corticosteroid therapy.",
      medicines: [
        "Clobetasol 0.05% Ointment",
        "Calcipotriol Ointment",
      ],
    },
    {
      id: 3,
      date: "2026-06-19",
      diagnosis:
        "Psoriasis remained stable with minimal plaque activity. Continue maintenance treatment.",
      medicines: [
        "Calcipotriol Ointment",
      ],
    },
    {
      id: 4,
      date: "2026-08-03",
      diagnosis:
        "No new psoriatic lesions observed. Regular moisturizing and follow-up advised.",
      medicines: [
        "Calcipotriol Ointment",
      ],
    },
  ],
},
{
  id: "MCP172",
  name: "Anjali Menon",
  age: 29,
  gender: "Female",
  disease: "Atopic Dermatitis (Eczema)",
  doctorId: "MCD027",
  doctorName: "Dr. Vikram Nair",
  history: [
    {
      id: 1,
      date: "2026-02-06",
      diagnosis:
        "Patient complained of itchy, dry skin with erythematous patches over the forearms and neck. Atopic dermatitis was diagnosed.",
      medicines: [
        "Hydrocortisone 1% Cream",
        "Moisturizing Cream",
      ],
    },
    {
      id: 2,
      date: "2026-03-29",
      diagnosis:
        "Itching reduced significantly after topical corticosteroids and regular emollient use.",
      medicines: [
        "Hydrocortisone 1% Cream",
        "Moisturizing Cream",
      ],
    },
    {
      id: 3,
      date: "2026-06-25",
      diagnosis:
        "Skin lesions remained well controlled. Continue moisturizers and avoid known irritants.",
      medicines: [
        "Moisturizing Cream",
      ],
    },
  ],
},
{
  id: "MCP173",
  name: "Vikram Patel",
  age: 41,
  gender: "Male",
  disease: "Tinea Corporis",
  doctorId: "MCD028",
  doctorName: "Dr. Priyanka Mehta",
  history: [
    {
      id: 1,
      date: "2026-01-22",
      diagnosis:
        "Patient presented with multiple itchy, ring-shaped erythematous lesions over the trunk. Fungal skin infection (tinea corporis) was diagnosed.",
      medicines: [
        "Terbinafine 1% Cream",
        "Cetirizine 10mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-12",
      diagnosis:
        "Lesions reduced significantly after antifungal therapy. Personal hygiene measures were reinforced.",
      medicines: [
        "Terbinafine 1% Cream",
      ],
    },
    {
      id: 3,
      date: "2026-05-30",
      diagnosis:
        "Complete resolution of fungal lesions with no recurrence noted.",
      medicines: [],
    },
  ],
},
{
  id: "MCP174",
  name: "Harini Rao",
  age: 33,
  gender: "Female",
  disease: "Vitiligo",
  doctorId: "MCD025",
  doctorName: "Dr. Arjun Khanna",
  history: [
    {
      id: 1,
      date: "2026-02-04",
      diagnosis:
        "Patient presented with gradually enlarging depigmented patches over both hands. Vitiligo was diagnosed.",
      medicines: [
        "Tacrolimus 0.1% Ointment",
        "Sunscreen SPF 50+",
      ],
    },
    {
      id: 2,
      date: "2026-03-28",
      diagnosis:
        "Patch margins remained stable with early signs of perifollicular repigmentation.",
      medicines: [
        "Tacrolimus 0.1% Ointment",
      ],
    },
    {
      id: 3,
      date: "2026-06-22",
      diagnosis:
        "Condition remained stable with gradual cosmetic improvement. Continue topical therapy.",
      medicines: [
        "Tacrolimus 0.1% Ointment",
      ],
    },
  ],
},
{
  id: "MCP175",
  name: "Manoj Verma",
  age: 54,
  gender: "Male",
  disease: "Seborrheic Dermatitis",
  doctorId: "MCD026",
  doctorName: "Dr. Ananya Kapoor",
  history: [
    {
      id: 1,
      date: "2026-01-17",
      diagnosis:
        "Patient complained of scalp itching with greasy scales and dandruff. Seborrheic dermatitis was diagnosed.",
      medicines: [
        "Ketoconazole 2% Shampoo",
        "Hydrocortisone Lotion",
      ],
    },
    {
      id: 2,
      date: "2026-03-08",
      diagnosis:
        "Scalp scaling reduced significantly after medicated shampoo use. Itching improved.",
      medicines: [
        "Ketoconazole 2% Shampoo",
      ],
    },
    {
      id: 3,
      date: "2026-06-16",
      diagnosis:
        "Condition remained under good control with maintenance therapy.",
      medicines: [
        "Ketoconazole 2% Shampoo",
      ],
    },
    {
      id: 4,
      date: "2026-08-02",
      diagnosis:
        "No major flare-ups reported. Continue weekly maintenance treatment.",
      medicines: [
        "Ketoconazole 2% Shampoo",
      ],
    },
  ],
},
{
  id: "MCP176",
  name: "Keerthana Sharma",
  age: 27,
  gender: "Female",
  disease: "Urticaria",
  doctorId: "MCD027",
  doctorName: "Dr. Vikram Nair",
  history: [
    {
      id: 1,
      date: "2026-02-08",
      diagnosis:
        "Patient presented with recurrent itchy wheals over the arms and trunk. Acute urticaria was diagnosed.",
      medicines: [
        "Levocetirizine 5mg",
        "Calamine Lotion",
      ],
    },
    {
      id: 2,
      date: "2026-03-25",
      diagnosis:
        "Episodes became less frequent after antihistamine therapy. Possible food triggers were discussed.",
      medicines: [
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 3,
      date: "2026-06-18",
      diagnosis:
        "No recurrence during the previous two months. Continue antihistamines only if required.",
      medicines: [],
    },
  ],
},
{
  id: "MCP177",
  name: "Rohit Kumar",
  age: 36,
  gender: "Male",
  disease: "Alopecia Areata",
  doctorId: "MCD027",
  doctorName: "Dr. Vikram Nair",
  history: [
    {
      id: 1,
      date: "2026-01-20",
      diagnosis:
        "Patient presented with a well-defined patch of hair loss over the scalp. Clinical examination confirmed alopecia areata.",
      medicines: [
        "Clobetasol 0.05% Lotion",
        "Minoxidil 5% Solution",
      ],
    },
    {
      id: 2,
      date: "2026-03-14",
      diagnosis:
        "Early hair regrowth was observed within the affected area. Continue topical treatment.",
      medicines: [
        "Minoxidil 5% Solution",
      ],
    },
    {
      id: 3,
      date: "2026-06-10",
      diagnosis:
        "Significant hair regrowth noted with no new patches of hair loss.",
      medicines: [
        "Minoxidil 5% Solution",
      ],
    },
  ],
},
{
  id: "MCP178",
  name: "Sneha Reddy",
  age: 30,
  gender: "Female",
  disease: "Rosacea",
  doctorId: "MCD026",
  doctorName: "Dr. Ananya Kapoor",
  history: [
    {
      id: 1,
      date: "2026-02-03",
      diagnosis:
        "Patient complained of persistent facial redness with occasional papules over the cheeks and nose. Rosacea was diagnosed.",
      medicines: [
        "Metronidazole 0.75% Gel",
        "Sunscreen SPF 50+",
      ],
    },
    {
      id: 2,
      date: "2026-03-29",
      diagnosis:
        "Facial redness reduced with topical therapy. Patient was advised to avoid heat and spicy foods.",
      medicines: [
        "Metronidazole 0.75% Gel",
      ],
    },
    {
      id: 3,
      date: "2026-06-23",
      diagnosis:
        "Rosacea remained stable with only occasional flushing episodes.",
      medicines: [
        "Metronidazole 0.75% Gel",
      ],
    },
  ],
},
{
  id: "MCP179",
  name: "Venkatesh Naidu",
  age: 57,
  gender: "Male",
  disease: "Onychomycosis",
  doctorId: "MCD025",
  doctorName: "Dr. Arjun Khanna",
  history: [
    {
      id: 1,
      date: "2026-01-24",
      diagnosis:
        "Patient presented with thickened, discolored toenails. Clinical findings were consistent with fungal nail infection (onychomycosis).",
      medicines: [
        "Terbinafine 250mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-21",
      diagnosis:
        "Healthy nail growth was observed with gradual improvement in nail appearance.",
      medicines: [
        "Terbinafine 250mg",
      ],
    },
    {
      id: 3,
      date: "2026-06-24",
      diagnosis:
        "Fungal infection resolved significantly. Continue nail hygiene and complete treatment course.",
      medicines: [
        "Terbinafine 250mg",
      ],
    },
    {
      id: 4,
      date: "2026-08-04",
      diagnosis:
        "No recurrence of fungal nail infection. Routine follow-up advised.",
      medicines: [],
    },
  ],
},
{
  id: "MCP180",
  name: "Pallavi Menon",
  age: 39,
  gender: "Female",
  disease: "Contact Dermatitis",
  doctorId: "MCD028",
  doctorName: "Dr. Priyanka Mehta",
  history: [
    {
      id: 1,
      date: "2026-02-06",
      diagnosis:
        "Patient developed an itchy erythematous rash over both hands after exposure to household cleaning agents. Contact dermatitis was diagnosed.",
      medicines: [
        "Mometasone 0.1% Cream",
        "Moisturizing Cream",
      ],
    },
    {
      id: 2,
      date: "2026-03-27",
      diagnosis:
        "Skin inflammation resolved after avoiding the triggering substance and using topical corticosteroids.",
      medicines: [
        "Moisturizing Cream",
      ],
    },
    {
      id: 3,
      date: "2026-06-20",
      diagnosis:
        "No recurrence of dermatitis. Protective gloves and regular moisturization were advised.",
      medicines: [],
    },
  ],
},
{
  id: "MCP181",
  name: "Karthik Verma",
  age: 46,
  gender: "Male",
  disease: "Lichen Planus",
  doctorId: "MCD027",
  doctorName: "Dr. Vikram Nair",
  history: [
    {
      id: 1,
      date: "2026-01-19",
      diagnosis:
        "Patient presented with itchy, violaceous, flat-topped papules over both wrists and ankles. Clinical findings were consistent with lichen planus.",
      medicines: [
        "Clobetasol 0.05% Ointment",
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-15",
      diagnosis:
        "Pruritus reduced significantly and skin lesions showed gradual flattening.",
      medicines: [
        "Clobetasol 0.05% Ointment",
      ],
    },
    {
      id: 3,
      date: "2026-06-17",
      diagnosis:
        "Disease remained stable with post-inflammatory pigmentation only. Continue follow-up.",
      medicines: [
        "Moisturizing Cream",
      ],
    },
  ],
},
{
  id: "MCP182",
  name: "Aishwarya Sharma",
  age: 31,
  gender: "Female",
  disease: "Impetigo",
  doctorId: "MCD026",
  doctorName: "Dr. Ananya Kapoor",
  history: [
    {
      id: 1,
      date: "2026-02-05",
      diagnosis:
        "Patient presented with honey-colored crusted lesions around the nose and lips. Impetigo was diagnosed.",
      medicines: [
        "Mupirocin 2% Ointment",
        "Cephalexin 500mg",
      ],
    },
    {
      id: 2,
      date: "2026-02-16",
      diagnosis:
        "Skin lesions healed well with antibiotic therapy. No new lesions developed.",
      medicines: [
        "Mupirocin 2% Ointment",
      ],
    },
    {
      id: 3,
      date: "2026-03-04",
      diagnosis:
        "Complete clinical recovery observed. Personal hygiene measures were reinforced.",
      medicines: [],
    },
  ],
},
{
  id: "MCP183",
  name: "Nagarjuna Rao",
  age: 59,
  gender: "Male",
  disease: "Herpes Zoster",
  doctorId: "MCD025",
  doctorName: "Dr. Arjun Khanna",
  history: [
    {
      id: 1,
      date: "2026-01-23",
      diagnosis:
        "Patient presented with painful grouped vesicular rash over the right chest following a dermatomal distribution. Herpes zoster was diagnosed.",
      medicines: [
        "Acyclovir 800mg",
        "Paracetamol 650mg",
      ],
    },
    {
      id: 2,
      date: "2026-02-07",
      diagnosis:
        "Skin lesions crusted completely and acute pain reduced significantly after antiviral therapy.",
      medicines: [
        "Acyclovir 800mg",
      ],
    },
    {
      id: 3,
      date: "2026-04-01",
      diagnosis:
        "Lesions healed completely with mild residual post-herpetic discomfort.",
      medicines: [
        "Gabapentin 300mg",
      ],
    },
    {
      id: 4,
      date: "2026-07-26",
      diagnosis:
        "Patient remained symptom-free with no recurrence of skin lesions.",
      medicines: [],
    },
  ],
},
{
  id: "MCP184",
  name: "Haritha Nair",
  age: 35,
  gender: "Female",
  disease: "Perioral Dermatitis",
  doctorId: "MCD028",
  doctorName: "Dr. Priyanka Mehta",
  history: [
    {
      id: 1,
      date: "2026-02-09",
      diagnosis:
        "Patient presented with erythematous papules around the mouth associated with mild burning sensation. Perioral dermatitis was diagnosed.",
      medicines: [
        "Metronidazole 0.75% Gel",
        "Doxycycline 100mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-30",
      diagnosis:
        "Facial rash improved significantly after discontinuing topical steroids and initiating treatment.",
      medicines: [
        "Metronidazole 0.75% Gel",
      ],
    },
    {
      id: 3,
      date: "2026-06-26",
      diagnosis:
        "Complete remission achieved with healthy skin appearance. Patient advised to avoid unnecessary topical steroid use.",
      medicines: [],
    },
  ],
},
{
  id: "MCP185",
  name: "Ravi Kulkarni",
  age: 52,
  gender: "Male",
  disease: "Scabies",
  doctorId: "MCD025",
  doctorName: "Dr. Arjun Khanna",
  history: [
    {
      id: 1,
      date: "2026-01-21",
      diagnosis:
        "Patient presented with intense nocturnal itching and papular lesions over the finger webs and wrists. Scabies was diagnosed.",
      medicines: [
        "Permethrin 5% Cream",
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 2,
      date: "2026-02-04",
      diagnosis:
        "Itching reduced significantly after treatment. Household contacts were advised simultaneous treatment.",
      medicines: [
        "Permethrin 5% Cream",
      ],
    },
    {
      id: 3,
      date: "2026-03-18",
      diagnosis:
        "Complete resolution of skin lesions with no recurrence.",
      medicines: [],
    },
  ],
},
{
  id: "MCP186",
  name: "Divya Patel",
  age: 34,
  gender: "Female",
  disease: "Lichen Simplex Chronicus",
  doctorId: "MCD027",
  doctorName: "Dr. Vikram Nair",
  history: [
    {
      id: 1,
      date: "2026-02-07",
      diagnosis:
        "Patient complained of persistent itching and thickened skin over the nape of the neck due to repeated scratching.",
      medicines: [
        "Mometasone 0.1% Cream",
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-29",
      diagnosis:
        "Skin thickening reduced considerably after topical corticosteroids and itch control.",
      medicines: [
        "Mometasone 0.1% Cream",
      ],
    },
    {
      id: 3,
      date: "2026-06-23",
      diagnosis:
        "Condition remained stable with minimal itching. Continue moisturizers and avoid scratching.",
      medicines: [
        "Moisturizing Cream",
      ],
    },
  ],
},
{
  id: "MCP187",
  name: "Ashok Menon",
  age: 61,
  gender: "Male",
  disease: "Cellulitis",
  doctorId: "MCD026",
  doctorName: "Dr. Ananya Kapoor",
  history: [
    {
      id: 1,
      date: "2026-01-25",
      diagnosis:
        "Patient presented with painful redness and swelling over the left lower leg associated with fever. Cellulitis was diagnosed.",
      medicines: [
        "Amoxicillin-Clavulanate 625mg",
        "Paracetamol 650mg",
      ],
    },
    {
      id: 2,
      date: "2026-02-08",
      diagnosis:
        "Skin redness and swelling improved significantly after antibiotic therapy.",
      medicines: [
        "Amoxicillin-Clavulanate 625mg",
      ],
    },
    {
      id: 3,
      date: "2026-03-10",
      diagnosis:
        "Complete clinical recovery achieved with no residual skin infection.",
      medicines: [],
    },
  ],
},
{
  id: "MCP188",
  name: "Megha Sharma",
  age: 28,
  gender: "Female",
  disease: "Pityriasis Versicolor",
  doctorId: "MCD028",
  doctorName: "Dr. Priyanka Mehta",
  history: [
    {
      id: 1,
      date: "2026-02-11",
      diagnosis:
        "Patient presented with multiple hypopigmented scaly patches over the upper back and shoulders. Pityriasis versicolor was diagnosed.",
      medicines: [
        "Ketoconazole 2% Shampoo",
        "Clotrimazole 1% Cream",
      ],
    },
    {
      id: 2,
      date: "2026-03-31",
      diagnosis:
        "Scaling resolved after antifungal treatment. Pigmentation gradually began returning.",
      medicines: [
        "Ketoconazole 2% Shampoo",
      ],
    },
    {
      id: 3,
      date: "2026-06-27",
      diagnosis:
        "Complete resolution of fungal infection with mild residual pigment changes expected to improve over time.",
      medicines: [],
    },
  ],
},
{
  id: "MCP189",
  name: "Sandeep Reddy",
  age: 43,
  gender: "Male",
  disease: "Viral Warts",
  doctorId: "MCD025",
  doctorName: "Dr. Arjun Khanna",
  history: [
    {
      id: 1,
      date: "2026-01-22",
      diagnosis:
        "Patient presented with multiple common warts over the fingers. Clinical examination confirmed viral warts.",
      medicines: [
        "Salicylic Acid 17% Solution",
      ],
    },
    {
      id: 2,
      date: "2026-03-18",
      diagnosis:
        "Size of the warts reduced after topical keratolytic treatment. Cryotherapy was performed for persistent lesions.",
      medicines: [
        "Salicylic Acid 17% Solution",
      ],
    },
    {
      id: 3,
      date: "2026-06-14",
      diagnosis:
        "Complete resolution of treated lesions with no recurrence observed.",
      medicines: [],
    },
  ],
},
{
  id: "MCP190",
  name: "Nandini Rao",
  age: 26,
  gender: "Female",
  disease: "Acne Vulgaris",
  doctorId: "MCD026",
  doctorName: "Dr. Ananya Kapoor",
  history: [
    {
      id: 1,
      date: "2026-02-03",
      diagnosis:
        "Patient presented with inflammatory papules and pustules over the face. Moderate acne vulgaris was diagnosed.",
      medicines: [
        "Adapalene 0.1% Gel",
        "Benzoyl Peroxide 2.5% Gel",
      ],
    },
    {
      id: 2,
      date: "2026-03-27",
      diagnosis:
        "Inflammatory acne lesions reduced significantly after topical treatment and skin-care counseling.",
      medicines: [
        "Adapalene 0.1% Gel",
      ],
    },
    {
      id: 3,
      date: "2026-06-22",
      diagnosis:
        "Acne remained well controlled with only occasional comedones.",
      medicines: [
        "Adapalene 0.1% Gel",
      ],
    },
  ],
},
{
  id: "MCP191",
  name: "Pradeep Kumar",
  age: 55,
  gender: "Male",
  disease: "Chronic Plaque Psoriasis",
  doctorId: "MCD027",
  doctorName: "Dr. Vikram Nair",
  history: [
    {
      id: 1,
      date: "2026-01-27",
      diagnosis:
        "Patient presented with thick erythematous plaques covered by silvery scales over the elbows, knees, and lower back.",
      medicines: [
        "Calcipotriol Ointment",
        "Clobetasol 0.05% Ointment",
      ],
    },
    {
      id: 2,
      date: "2026-03-21",
      diagnosis:
        "Scaling and itching improved considerably with topical therapy and regular emollient use.",
      medicines: [
        "Calcipotriol Ointment",
      ],
    },
    {
      id: 3,
      date: "2026-06-20",
      diagnosis:
        "Disease remained stable with minimal plaque activity during follow-up.",
      medicines: [
        "Calcipotriol Ointment",
      ],
    },
    {
      id: 4,
      date: "2026-08-02",
      diagnosis:
        "No significant flare-ups reported. Continue maintenance therapy.",
      medicines: [
        "Calcipotriol Ointment",
      ],
    },
  ],
},
{
  id: "MCP192",
  name: "Pooja Menon",
  age: 38,
  gender: "Female",
  disease: "Hand Eczema",
  doctorId: "MCD028",
  doctorName: "Dr. Priyanka Mehta",
  history: [
    {
      id: 1,
      date: "2026-02-09",
      diagnosis:
        "Patient presented with dry, cracked, itchy skin over both hands due to repeated exposure to detergents.",
      medicines: [
        "Mometasone 0.1% Cream",
        "Moisturizing Cream",
      ],
    },
    {
      id: 2,
      date: "2026-03-31",
      diagnosis:
        "Skin inflammation reduced after topical treatment and regular moisturizer application.",
      medicines: [
        "Moisturizing Cream",
      ],
    },
    {
      id: 3,
      date: "2026-06-26",
      diagnosis:
        "Condition remained well controlled. Protective gloves and regular skin hydration were advised.",
      medicines: [
        "Moisturizing Cream",
      ],
    },
  ],
},
{
  id: "MCP193",
  name: "Vijay Naidu",
  age: 49,
  gender: "Male",
  disease: "Folliculitis",
  doctorId: "MCD026",
  doctorName: "Dr. Ananya Kapoor",
  history: [
    {
      id: 1,
      date: "2026-01-28",
      diagnosis:
        "Patient presented with multiple tender pustules involving the beard area. Bacterial folliculitis was diagnosed.",
      medicines: [
        "Mupirocin 2% Ointment",
        "Cephalexin 500mg",
      ],
    },
    {
      id: 2,
      date: "2026-02-15",
      diagnosis:
        "Skin lesions healed well with antibiotic therapy. No new pustules were observed.",
      medicines: [
        "Mupirocin 2% Ointment",
      ],
    },
    {
      id: 3,
      date: "2026-03-12",
      diagnosis:
        "Complete clinical recovery achieved. Proper shaving hygiene was advised.",
      medicines: [],
    },
  ],
},
{
  id: "MCP194",
  name: "Keerthi Reddy",
  age: 32,
  gender: "Female",
  disease: "Lentigines",
  doctorId: "MCD028",
  doctorName: "Dr. Priyanka Mehta",
  history: [
    {
      id: 1,
      date: "2026-02-06",
      diagnosis:
        "Patient presented with multiple benign pigmented macules over sun-exposed facial skin. Solar lentigines were diagnosed.",
      medicines: [
        "Sunscreen SPF 50+",
        "Azelaic Acid 20% Cream",
      ],
    },
    {
      id: 2,
      date: "2026-04-02",
      diagnosis:
        "Pigmented lesions remained stable. Strict sun protection measures were reinforced.",
      medicines: [
        "Sunscreen SPF 50+",
      ],
    },
    {
      id: 3,
      date: "2026-06-28",
      diagnosis:
        "No progression of pigmentation noted. Continue routine skin care and photoprotection.",
      medicines: [
        "Sunscreen SPF 50+",
      ],
    },
  ],
},
{
  id: "MCP195",
  name: "Arun Kumar",
  age: 58,
  gender: "Male",
  disease: "Chronic Urticaria",
  doctorId: "MCD025",
  doctorName: "Dr. Arjun Khanna",
  history: [
    {
      id: 1,
      date: "2026-01-23",
      diagnosis:
        "Patient complained of recurrent itchy wheals occurring almost daily for more than six weeks. Chronic urticaria was diagnosed.",
      medicines: [
        "Levocetirizine 5mg",
        "Montelukast 10mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-20",
      diagnosis:
        "Frequency of urticaria episodes reduced significantly with regular antihistamine therapy.",
      medicines: [
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 3,
      date: "2026-06-24",
      diagnosis:
        "Patient remained symptom-free during follow-up. Continue medication only if symptoms recur.",
      medicines: [],
    },
  ],
},
{
  id: "MCP196",
  name: "Shruthi Menon",
  age: 29,
  gender: "Female",
  disease: "Mild Plaque Psoriasis",
  doctorId: "MCD027",
  doctorName: "Dr. Vikram Nair",
  history: [
    {
      id: 1,
      date: "2026-02-10",
      diagnosis:
        "Patient presented with small erythematous scaly plaques over the elbows and scalp. Mild plaque psoriasis was diagnosed.",
      medicines: [
        "Calcipotriol Ointment",
        "Moisturizing Cream",
      ],
    },
    {
      id: 2,
      date: "2026-04-01",
      diagnosis:
        "Plaque size and scaling reduced significantly with topical vitamin D analogue therapy.",
      medicines: [
        "Calcipotriol Ointment",
      ],
    },
    {
      id: 3,
      date: "2026-07-01",
      diagnosis:
        "Disease remained well controlled with no new lesions during follow-up.",
      medicines: [
        "Moisturizing Cream",
      ],
    },
    {
      id: 4,
      date: "2026-08-05",
      diagnosis:
        "Patient remained clinically stable. Continue maintenance skin care and regular dermatology follow-up.",
      medicines: [
        "Moisturizing Cream",
      ],
    },
  ],
},
{
  id: "MCP197",
  name: "Rakesh Sharma",
  age: 42,
  gender: "Male",
  disease: "Chronic Sinusitis",
  doctorId: "MCD029",
  doctorName: "Dr. Kunal Sharma",
  history: [
    {
      id: 1,
      date: "2026-01-12",
      diagnosis:
        "Patient presented with persistent nasal congestion, facial pressure, and thick nasal discharge for more than 12 weeks. Chronic sinusitis was diagnosed.",
      medicines: [
        "Amoxicillin-Clavulanate 625mg",
        "Fluticasone Nasal Spray",
      ],
    },
    {
      id: 2,
      date: "2026-02-08",
      diagnosis:
        "Facial pain reduced significantly after antibiotic therapy. Nasal congestion persisted mildly.",
      medicines: [
        "Fluticasone Nasal Spray",
        "Saline Nasal Spray",
      ],
    },
    {
      id: 3,
      date: "2026-03-22",
      diagnosis:
        "CT PNS showed improving sinus inflammation. Continue intranasal corticosteroid therapy.",
      medicines: [
        "Fluticasone Nasal Spray",
      ],
    },
    {
      id: 4,
      date: "2026-05-18",
      diagnosis:
        "Patient reported only occasional nasal blockage. Symptoms remained well controlled.",
      medicines: [
        "Fluticasone Nasal Spray",
      ],
    },
    {
      id: 5,
      date: "2026-07-30",
      diagnosis:
        "No acute exacerbations since the previous visit. Continue maintenance treatment.",
      medicines: [],
    },
  ],
},
{
  id: "MCP198",
  name: "Anjali Thomas",
  age: 31,
  gender: "Female",
  disease: "Allergic Rhinitis",
  doctorId: "MCD030",
  doctorName: "Dr. Aisha Thomas",
  history: [
    {
      id: 1,
      date: "2026-01-18",
      diagnosis:
        "Patient complained of recurrent sneezing, watery nasal discharge, and nasal itching triggered by dust exposure.",
      medicines: [
        "Levocetirizine 5mg",
        "Fluticasone Nasal Spray",
      ],
    },
    {
      id: 2,
      date: "2026-02-14",
      diagnosis:
        "Sneezing episodes reduced after antihistamine therapy. Dust avoidance measures were reinforced.",
      medicines: [
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 3,
      date: "2026-04-06",
      diagnosis:
        "Patient remained symptom-free except during seasonal changes.",
      medicines: [
        "Fluticasone Nasal Spray",
      ],
    },
  ],
},
{
  id: "MCP199",
  name: "Venkatesh Rao",
  age: 56,
  gender: "Male",
  disease: "Chronic Otitis Media",
  doctorId: "MCD031",
  doctorName: "Dr. Rohan Iyer",
  history: [
    {
      id: 1,
      date: "2026-01-10",
      diagnosis:
        "Patient presented with intermittent ear discharge and reduced hearing in the left ear. Chronic otitis media was diagnosed.",
      medicines: [
        "Ciprofloxacin Ear Drops",
        "Amoxicillin-Clavulanate 625mg",
      ],
    },
    {
      id: 2,
      date: "2026-02-05",
      diagnosis:
        "Ear discharge reduced significantly. Tympanic membrane showed signs of healing.",
      medicines: [
        "Ciprofloxacin Ear Drops",
      ],
    },
    {
      id: 3,
      date: "2026-03-17",
      diagnosis:
        "Hearing improved gradually. No active infection noted during examination.",
      medicines: [],
    },
    {
      id: 4,
      date: "2026-05-27",
      diagnosis:
        "Patient remained stable with a dry ear. Hearing assessment was satisfactory.",
      medicines: [],
    },
  ],
},
{
  id: "MCP200",
  name: "Priya Menon",
  age: 27,
  gender: "Female",
  disease: "Acute Tonsillitis",
  doctorId: "MCD032",
  doctorName: "Dr. Sneha Varma",
  history: [
    {
      id: 1,
      date: "2026-02-02",
      diagnosis:
        "Patient presented with fever, sore throat, and painful swallowing. Bilateral enlarged tonsils with exudates were noted.",
      medicines: [
        "Amoxicillin 500mg",
        "Paracetamol 650mg",
      ],
    },
    {
      id: 2,
      date: "2026-02-10",
      diagnosis:
        "Throat pain reduced considerably after antibiotic therapy. Fever resolved completely.",
      medicines: [
        "Amoxicillin 500mg",
      ],
    },
    {
      id: 3,
      date: "2026-03-01",
      diagnosis:
        "Complete recovery observed. Patient was advised adequate hydration and oral hygiene.",
      medicines: [],
    },
    {
      id: 4,
      date: "2026-06-12",
      diagnosis:
        "No recurrence of tonsillitis since the previous visit.",
      medicines: [],
    },
    {
      id: 5,
      date: "2026-08-04",
      diagnosis:
        "Routine follow-up remained normal with healthy oropharyngeal examination.",
      medicines: [],
    },
  ],
},
{
  id: "MCP201",
  name: "Harish Kumar",
  age: 49,
  gender: "Male",
  disease: "Deviated Nasal Septum (DNS)",
  doctorId: "MCD029",
  doctorName: "Dr. Kunal Sharma",
  history: [
    {
      id: 1,
      date: "2026-01-14",
      diagnosis:
        "Patient complained of chronic nasal blockage, predominantly on the left side, associated with difficulty breathing at night. Examination confirmed a deviated nasal septum.",
      medicines: [
        "Fluticasone Nasal Spray",
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 2,
      date: "2026-02-11",
      diagnosis:
        "Symptoms improved partially with medical management. Septoplasty was discussed as a treatment option.",
      medicines: [
        "Fluticasone Nasal Spray",
      ],
    },
    {
      id: 3,
      date: "2026-04-03",
      diagnosis:
        "Patient elected to continue conservative treatment. No recurrent sinus infections reported.",
      medicines: [
        "Saline Nasal Spray",
      ],
    },
    {
      id: 4,
      date: "2026-06-20",
      diagnosis:
        "Nasal obstruction remained stable. Continue symptomatic treatment and review if symptoms worsen.",
      medicines: [],
    },
  ],
},
{
  id: "MCP202",
  name: "Deepika Reddy",
  age: 34,
  gender: "Female",
  disease: "Otitis Externa",
  doctorId: "MCD031",
  doctorName: "Dr. Rohan Iyer",
  history: [
    {
      id: 1,
      date: "2026-02-05",
      diagnosis:
        "Patient presented with severe right ear pain, itching, and mild ear discharge after swimming. Acute otitis externa was diagnosed.",
      medicines: [
        "Ciprofloxacin Ear Drops",
        "Paracetamol 650mg",
      ],
    },
    {
      id: 2,
      date: "2026-02-14",
      diagnosis:
        "Pain resolved significantly after topical antibiotic treatment. Ear canal inflammation reduced.",
      medicines: [
        "Ciprofloxacin Ear Drops",
      ],
    },
    {
      id: 3,
      date: "2026-03-10",
      diagnosis:
        "Complete recovery observed. Patient advised to keep ears dry while swimming.",
      medicines: [],
    },
  ],
},
{
  id: "MCP203",
  name: "Srinivas Patel",
  age: 61,
  gender: "Male",
  disease: "Benign Paroxysmal Positional Vertigo (BPPV)",
  doctorId: "MCD032",
  doctorName: "Dr. Sneha Varma",
  history: [
    {
      id: 1,
      date: "2026-01-18",
      diagnosis:
        "Patient complained of brief spinning sensations triggered by head movements. Dix-Hallpike test was positive for BPPV.",
      medicines: [
        "Betahistine 16mg",
      ],
    },
    {
      id: 2,
      date: "2026-02-09",
      diagnosis:
        "Epley maneuver was performed with marked improvement in vertigo symptoms.",
      medicines: [
        "Betahistine 16mg",
      ],
    },
    {
      id: 3,
      date: "2026-03-27",
      diagnosis:
        "Only occasional dizziness reported. Vestibular rehabilitation exercises were advised.",
      medicines: [],
    },
    {
      id: 4,
      date: "2026-05-22",
      diagnosis:
        "Patient remained symptom-free with no recurrent vertigo episodes.",
      medicines: [],
    },
    {
      id: 5,
      date: "2026-07-31",
      diagnosis:
        "Routine follow-up was unremarkable. Continue home vestibular exercises if required.",
      medicines: [],
    },
  ],
},
{
  id: "MCP204",
  name: "Nandini Sharma",
  age: 39,
  gender: "Female",
  disease: "Nasal Polyps",
  doctorId: "MCD030",
  doctorName: "Dr. Aisha Thomas",
  history: [
    {
      id: 1,
      date: "2026-02-03",
      diagnosis:
        "Patient presented with progressive nasal obstruction, reduced sense of smell, and recurrent sinus symptoms. Nasal polyps were identified on endoscopy.",
      medicines: [
        "Fluticasone Nasal Spray",
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-19",
      diagnosis:
        "Polyp size reduced after intranasal corticosteroid therapy. Nasal airflow improved.",
      medicines: [
        "Fluticasone Nasal Spray",
      ],
    },
    {
      id: 3,
      date: "2026-05-18",
      diagnosis:
        "Patient regained partial sense of smell. Continue long-term medical therapy.",
      medicines: [
        "Fluticasone Nasal Spray",
      ],
    },
    {
      id: 4,
      date: "2026-08-02",
      diagnosis:
        "Symptoms remained stable without need for surgical intervention.",
      medicines: [
        "Fluticasone Nasal Spray",
      ],
    },
  ],
},
{
  id: "MCP205",
  name: "Rajesh Verma",
  age: 53,
  gender: "Male",
  disease: "Tinnitus",
  doctorId: "MCD031",
  doctorName: "Dr. Rohan Iyer",
  history: [
    {
      id: 1,
      date: "2026-01-16",
      diagnosis:
        "Patient complained of persistent ringing in both ears for three months without ear pain or discharge. Audiological evaluation was performed.",
      medicines: [
        "Betahistine 16mg",
        "Vitamin B Complex",
      ],
    },
    {
      id: 2,
      date: "2026-02-18",
      diagnosis:
        "Tinnitus intensity reduced slightly after counseling and medical management. Hearing protection advice was reinforced.",
      medicines: [
        "Betahistine 16mg",
      ],
    },
    {
      id: 3,
      date: "2026-04-09",
      diagnosis:
        "Patient adapted well to tinnitus management strategies with reduced sleep disturbance.",
      medicines: [
        "Vitamin B Complex",
      ],
    },
    {
      id: 4,
      date: "2026-06-28",
      diagnosis:
        "Symptoms remained stable with no progression of hearing impairment.",
      medicines: [],
    },
  ],
},
{
  id: "MCP206",
  name: "Meera Nair",
  age: 29,
  gender: "Female",
  disease: "Acute Laryngitis",
  doctorId: "MCD032",
  doctorName: "Dr. Sneha Varma",
  history: [
    {
      id: 1,
      date: "2026-02-01",
      diagnosis:
        "Patient presented with hoarseness of voice and sore throat following an upper respiratory tract infection. Acute laryngitis was diagnosed.",
      medicines: [
        "Paracetamol 650mg",
        "Steam Inhalation",
      ],
    },
    {
      id: 2,
      date: "2026-02-12",
      diagnosis:
        "Voice quality improved significantly after vocal rest and supportive treatment.",
      medicines: [
        "Steam Inhalation",
      ],
    },
    {
      id: 3,
      date: "2026-03-06",
      diagnosis:
        "Complete recovery noted. Patient advised to avoid excessive voice strain.",
      medicines: [],
    },
  ],
},
{
  id: "MCP207",
  name: "Venkatesh Rao",
  age: 58,
  gender: "Male",
  disease: "Sensorineural Hearing Loss",
  doctorId: "MCD029",
  doctorName: "Dr. Kunal Sharma",
  history: [
    {
      id: 1,
      date: "2026-01-20",
      diagnosis:
        "Patient complained of gradual bilateral hearing loss over two years. Pure tone audiometry confirmed moderate sensorineural hearing loss.",
      medicines: [
        "Vitamin B Complex",
      ],
    },
    {
      id: 2,
      date: "2026-03-14",
      diagnosis:
        "Patient was evaluated for hearing aid use. Communication ability improved with counseling.",
      medicines: [],
    },
    {
      id: 3,
      date: "2026-05-09",
      diagnosis:
        "Hearing remained stable. Patient adapted well to hearing amplification devices.",
      medicines: [],
    },
    {
      id: 4,
      date: "2026-07-24",
      diagnosis:
        "No further deterioration noted on repeat audiometry. Continue annual hearing evaluation.",
      medicines: [],
    },
  ],
},
{
  id: "MCP208",
  name: "Pallavi Thomas",
  age: 36,
  gender: "Female",
  disease: "Chronic Pharyngitis",
  doctorId: "MCD030",
  doctorName: "Dr. Aisha Thomas",
  history: [
    {
      id: 1,
      date: "2026-01-28",
      diagnosis:
        "Patient complained of persistent throat irritation and dryness for several weeks. Chronic pharyngitis was diagnosed.",
      medicines: [
        "Pantoprazole 40mg",
        "Warm Salt Water Gargles",
      ],
    },
    {
      id: 2,
      date: "2026-03-05",
      diagnosis:
        "Throat discomfort reduced after treatment of associated acid reflux and supportive care.",
      medicines: [
        "Pantoprazole 40mg",
      ],
    },
    {
      id: 3,
      date: "2026-05-02",
      diagnosis:
        "Symptoms remained mild with improved hydration and avoidance of throat irritants.",
      medicines: [],
    },
    {
      id: 4,
      date: "2026-06-26",
      diagnosis:
        "Patient remained clinically stable without recurrent throat infections.",
      medicines: [],
    },
    {
      id: 5,
      date: "2026-08-04",
      diagnosis:
        "Routine ENT examination was normal. Continue lifestyle modifications.",
      medicines: [],
    },
  ],
},
{
  id: "MCP209",
  name: "Arun Kumar",
  age: 47,
  gender: "Male",
  disease: "Epistaxis",
  doctorId: "MCD029",
  doctorName: "Dr. Kunal Sharma",
  history: [
    {
      id: 1,
      date: "2026-01-15",
      diagnosis:
        "Patient presented with recurrent spontaneous nosebleeds from the left nostril. Anterior epistaxis was diagnosed.",
      medicines: [
        "Oxymetazoline Nasal Spray",
        "Saline Nasal Gel",
      ],
    },
    {
      id: 2,
      date: "2026-02-06",
      diagnosis:
        "Nasal cauterization was performed successfully. No further significant bleeding episodes reported.",
      medicines: [
        "Saline Nasal Gel",
      ],
    },
    {
      id: 3,
      date: "2026-03-20",
      diagnosis:
        "Nasal mucosa healed well. Patient was advised to avoid nose picking and excessive nasal dryness.",
      medicines: [],
    },
    {
      id: 4,
      date: "2026-06-18",
      diagnosis:
        "No recurrence of epistaxis. Routine follow-up remained normal.",
      medicines: [],
    },
  ],
},
{
  id: "MCP210",
  name: "Sneha Patel",
  age: 33,
  gender: "Female",
  disease: "Vocal Cord Nodules",
  doctorId: "MCD032",
  doctorName: "Dr. Sneha Varma",
  history: [
    {
      id: 1,
      date: "2026-02-04",
      diagnosis:
        "Patient complained of persistent hoarseness due to prolonged voice use. Laryngoscopy confirmed bilateral vocal cord nodules.",
      medicines: [
        "Voice Therapy",
        "Pantoprazole 40mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-18",
      diagnosis:
        "Voice quality improved after speech therapy and vocal hygiene measures.",
      medicines: [
        "Voice Therapy",
      ],
    },
    {
      id: 3,
      date: "2026-05-14",
      diagnosis:
        "Marked improvement observed with minimal residual hoarseness.",
      medicines: [
        "Voice Therapy",
      ],
    },
    {
      id: 4,
      date: "2026-07-30",
      diagnosis:
        "Patient regained normal voice quality. Continue vocal hygiene practices.",
      medicines: [],
    },
  ],
},
{
  id: "MCP211",
  name: "Mahesh Reddy",
  age: 62,
  gender: "Male",
  disease: "Impacted Ear Wax",
  doctorId: "MCD031",
  doctorName: "Dr. Rohan Iyer",
  history: [
    {
      id: 1,
      date: "2026-01-19",
      diagnosis:
        "Patient presented with reduced hearing and ear fullness. Examination revealed impacted cerumen in both ears.",
      medicines: [
        "Carbamide Peroxide Ear Drops",
      ],
    },
    {
      id: 2,
      date: "2026-02-02",
      diagnosis:
        "Cerumen removal was performed successfully. Hearing improved immediately after the procedure.",
      medicines: [],
    },
    {
      id: 3,
      date: "2026-04-01",
      diagnosis:
        "Ear canals remained clear. Patient advised to avoid inserting objects into the ears.",
      medicines: [],
    },
  ],
},
{
  id: "MCP212",
  name: "Aparna Menon",
  age: 40,
  gender: "Female",
  disease: "Chronic Rhinosinusitis",
  doctorId: "MCD030",
  doctorName: "Dr. Aisha Thomas",
  history: [
    {
      id: 1,
      date: "2026-01-23",
      diagnosis:
        "Patient presented with nasal congestion, facial heaviness, and reduced sense of smell lasting over three months.",
      medicines: [
        "Fluticasone Nasal Spray",
        "Saline Nasal Irrigation",
      ],
    },
    {
      id: 2,
      date: "2026-02-19",
      diagnosis:
        "Facial pressure improved after medical therapy. Endoscopic examination showed reduced mucosal edema.",
      medicines: [
        "Fluticasone Nasal Spray",
      ],
    },
    {
      id: 3,
      date: "2026-04-15",
      diagnosis:
        "Patient reported improved nasal airflow with only occasional congestion.",
      medicines: [
        "Saline Nasal Irrigation",
      ],
    },
    {
      id: 4,
      date: "2026-06-12",
      diagnosis:
        "Symptoms remained stable. Continue maintenance intranasal corticosteroid therapy.",
      medicines: [
        "Fluticasone Nasal Spray",
      ],
    },
    {
      id: 5,
      date: "2026-08-02",
      diagnosis:
        "No acute sinus infections since the previous visit. Routine follow-up advised.",
      medicines: [],
    },
  ],
},
{
  id: "MCP213",
  name: "Kiran Sharma",
  age: 45,
  gender: "Male",
  disease: "Peritonsillar Abscess",
  doctorId: "MCD032",
  doctorName: "Dr. Sneha Varma",
  history: [
    {
      id: 1,
      date: "2026-01-17",
      diagnosis:
        "Patient presented with severe sore throat, fever, muffled voice, and difficulty swallowing. Peritonsillar abscess was diagnosed.",
      medicines: [
        "Amoxicillin-Clavulanate 625mg",
        "Paracetamol 650mg",
      ],
    },
    {
      id: 2,
      date: "2026-01-24",
      diagnosis:
        "Needle aspiration of the abscess was performed successfully. Pain and swelling reduced significantly.",
      medicines: [
        "Amoxicillin-Clavulanate 625mg",
      ],
    },
    {
      id: 3,
      date: "2026-02-10",
      diagnosis:
        "Complete resolution of infection noted. Oral intake returned to normal.",
      medicines: [],
    },
    {
      id: 4,
      date: "2026-04-18",
      diagnosis:
        "No recurrence of abscess or tonsillar infection during follow-up.",
      medicines: [],
    },
  ],
},
{
  id: "MCP214",
  name: "Anitha Reddy",
  age: 37,
  gender: "Female",
  disease: "Meniere's Disease",
  doctorId: "MCD031",
  doctorName: "Dr. Rohan Iyer",
  history: [
    {
      id: 1,
      date: "2026-02-02",
      diagnosis:
        "Patient complained of recurrent vertigo, tinnitus, and fluctuating hearing loss. Clinical findings were suggestive of Meniere's disease.",
      medicines: [
        "Betahistine 16mg",
        "Hydrochlorothiazide 25mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-08",
      diagnosis:
        "Vertigo episodes became less frequent after treatment and dietary sodium restriction.",
      medicines: [
        "Betahistine 16mg",
      ],
    },
    {
      id: 3,
      date: "2026-05-06",
      diagnosis:
        "Patient reported only occasional dizziness. Hearing remained stable.",
      medicines: [
        "Betahistine 16mg",
      ],
    },
    {
      id: 4,
      date: "2026-06-28",
      diagnosis:
        "Symptoms remained well controlled. Continue low-salt diet and regular follow-up.",
      medicines: [
        "Betahistine 16mg",
      ],
    },
    {
      id: 5,
      date: "2026-08-03",
      diagnosis:
        "No severe vertigo attacks reported since the previous visit.",
      medicines: [],
    },
  ],
},
{
  id: "MCP215",
  name: "Ramesh Patel",
  age: 55,
  gender: "Male",
  disease: "Otomycosis",
  doctorId: "MCD030",
  doctorName: "Dr. Aisha Thomas",
  history: [
    {
      id: 1,
      date: "2026-01-20",
      diagnosis:
        "Patient presented with itching, ear blockage, and black fungal debris in the external auditory canal. Otomycosis was diagnosed.",
      medicines: [
        "Clotrimazole Ear Drops",
      ],
    },
    {
      id: 2,
      date: "2026-02-05",
      diagnosis:
        "Ear canal cleaning was performed. Fungal debris reduced significantly after antifungal therapy.",
      medicines: [
        "Clotrimazole Ear Drops",
      ],
    },
    {
      id: 3,
      date: "2026-03-12",
      diagnosis:
        "Complete resolution of fungal infection observed. Patient advised to keep ears dry.",
      medicines: [],
    },
  ],
},
{
  id: "MCP216",
  name: "Pooja Nair",
  age: 30,
  gender: "Female",
  disease: "Recurrent Tonsillitis",
  doctorId: "MCD029",
  doctorName: "Dr. Kunal Sharma",
  history: [
    {
      id: 1,
      date: "2026-01-15",
      diagnosis:
        "Patient reported frequent episodes of sore throat and fever over the past year. Recurrent tonsillitis was diagnosed.",
      medicines: [
        "Amoxicillin 500mg",
        "Paracetamol 650mg",
      ],
    },
    {
      id: 2,
      date: "2026-02-18",
      diagnosis:
        "Symptoms resolved after antibiotic therapy. Tonsillectomy was discussed due to recurrent episodes.",
      medicines: [],
    },
    {
      id: 3,
      date: "2026-04-09",
      diagnosis:
        "Patient experienced one mild recurrence managed conservatively.",
      medicines: [
        "Paracetamol 650mg",
      ],
    },
    {
      id: 4,
      date: "2026-06-14",
      diagnosis:
        "No further infections reported. Continue observation and review if recurrence increases.",
      medicines: [],
    },
    {
      id: 5,
      date: "2026-08-04",
      diagnosis:
        "Routine follow-up remained stable without indication for surgery at present.",
      medicines: [],
    },
  ],
},
{
  id: "MCP217",
  name: "Srinivas Kumar",
  age: 51,
  gender: "Male",
  disease: "Acute Rhinitis",
  doctorId: "MCD030",
  doctorName: "Dr. Aisha Thomas",
  history: [
    {
      id: 1,
      date: "2026-01-18",
      diagnosis:
        "Patient presented with nasal congestion, sneezing, watery nasal discharge, and mild fever. Acute viral rhinitis was diagnosed.",
      medicines: [
        "Levocetirizine 5mg",
        "Paracetamol 650mg",
      ],
    },
    {
      id: 2,
      date: "2026-01-27",
      diagnosis:
        "Symptoms improved significantly with supportive treatment. Nasal congestion reduced.",
      medicines: [
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 3,
      date: "2026-02-15",
      diagnosis:
        "Complete recovery achieved with no residual nasal symptoms.",
      medicines: [],
    },
  ],
},
{
  id: "MCP218",
  name: "Lakshmi Rao",
  age: 43,
  gender: "Female",
  disease: "Eustachian Tube Dysfunction",
  doctorId: "MCD031",
  doctorName: "Dr. Rohan Iyer",
  history: [
    {
      id: 1,
      date: "2026-02-01",
      diagnosis:
        "Patient complained of ear fullness, popping sensation, and mild hearing difficulty following an upper respiratory tract infection.",
      medicines: [
        "Fluticasone Nasal Spray",
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 2,
      date: "2026-02-25",
      diagnosis:
        "Ear pressure reduced after treatment. Tympanic membrane mobility improved on examination.",
      medicines: [
        "Fluticasone Nasal Spray",
      ],
    },
    {
      id: 3,
      date: "2026-04-14",
      diagnosis:
        "Patient reported normal hearing with complete resolution of ear fullness.",
      medicines: [],
    },
    {
      id: 4,
      date: "2026-06-30",
      diagnosis:
        "Routine follow-up remained normal with no recurrence of symptoms.",
      medicines: [],
    },
  ],
},
{
  id: "MCP219",
  name: "Prakash Menon",
  age: 59,
  gender: "Male",
  disease: "Cholesteatoma",
  doctorId: "MCD029",
  doctorName: "Dr. Kunal Sharma",
  history: [
    {
      id: 1,
      date: "2026-01-21",
      diagnosis:
        "Patient presented with chronic foul-smelling ear discharge and progressive hearing loss. Examination confirmed cholesteatoma.",
      medicines: [
        "Ciprofloxacin Ear Drops",
      ],
    },
    {
      id: 2,
      date: "2026-02-18",
      diagnosis:
        "Patient underwent tympanomastoid surgery successfully. Post-operative recovery was satisfactory.",
      medicines: [
        "Amoxicillin-Clavulanate 625mg",
      ],
    },
    {
      id: 3,
      date: "2026-03-29",
      diagnosis:
        "Surgical wound healed well. Ear remained dry with improved hearing.",
      medicines: [],
    },
    {
      id: 4,
      date: "2026-05-27",
      diagnosis:
        "No recurrence of disease observed during otoscopic examination.",
      medicines: [],
    },
    {
      id: 5,
      date: "2026-08-02",
      diagnosis:
        "Patient remained clinically stable with satisfactory hearing outcome.",
      medicines: [],
    },
  ],
},
{
  id: "MCP220",
  name: "Neha Sharma",
  age: 28,
  gender: "Female",
  disease: "Allergic Rhinosinusitis",
  doctorId: "MCD032",
  doctorName: "Dr. Sneha Varma",
  history: [
    {
      id: 1,
      date: "2026-02-04",
      diagnosis:
        "Patient presented with recurrent sneezing, nasal blockage, facial pressure, and watery nasal discharge triggered by dust exposure.",
      medicines: [
        "Fluticasone Nasal Spray",
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 2,
      date: "2026-03-19",
      diagnosis:
        "Symptoms improved considerably with intranasal corticosteroids and allergen avoidance.",
      medicines: [
        "Fluticasone Nasal Spray",
      ],
    },
    {
      id: 3,
      date: "2026-05-20",
      diagnosis:
        "Only occasional seasonal symptoms reported. Continue maintenance treatment.",
      medicines: [
        "Levocetirizine 5mg",
      ],
    },
    {
      id: 4,
      date: "2026-07-31",
      diagnosis:
        "Patient remained clinically stable with no acute sinus infections.",
      medicines: [],
    },
  ],
},
{
  id: "MCP221",
  name: "Rohit Verma",
  age: 46,
  gender: "Male",
  disease: "Chronic Laryngitis",
  doctorId: "MCD032",
  doctorName: "Dr. Sneha Varma",
  history: [
    {
      id: 1,
      date: "2026-01-16",
      diagnosis:
        "Patient presented with persistent hoarseness of voice for more than six weeks. Flexible laryngoscopy revealed chronic laryngeal inflammation.",
      medicines: [
        "Pantoprazole 40mg",
        "Voice Therapy",
      ],
    },
    {
      id: 2,
      date: "2026-02-13",
      diagnosis:
        "Voice quality improved after vocal rest, reflux management, and speech therapy.",
      medicines: [
        "Voice Therapy",
        "Pantoprazole 40mg",
      ],
    },
    {
      id: 3,
      date: "2026-04-08",
      diagnosis:
        "Only mild intermittent hoarseness remained. Continue vocal hygiene measures.",
      medicines: [
        "Voice Therapy",
      ],
    },
    {
      id: 4,
      date: "2026-06-18",
      diagnosis:
        "Patient remained clinically stable with normal vocal cord mobility.",
      medicines: [],
    },
  ],
},
{
  id: "MCP222",
  name: "Anusha Rao",
  age: 35,
  gender: "Female",
  disease: "Acute Otitis Media",
  doctorId: "MCD031",
  doctorName: "Dr. Rohan Iyer",
  history: [
    {
      id: 1,
      date: "2026-02-02",
      diagnosis:
        "Patient complained of severe left ear pain, fever, and temporary hearing reduction. Acute otitis media was diagnosed.",
      medicines: [
        "Amoxicillin-Clavulanate 625mg",
        "Paracetamol 650mg",
      ],
    },
    {
      id: 2,
      date: "2026-02-11",
      diagnosis:
        "Ear pain resolved significantly after antibiotic therapy. Tympanic membrane inflammation reduced.",
      medicines: [
        "Amoxicillin-Clavulanate 625mg",
      ],
    },
    {
      id: 3,
      date: "2026-03-05",
      diagnosis:
        "Complete recovery noted with restoration of normal hearing.",
      medicines: [],
    },
  ],
},
{
  id: "MCP223",
  name: "Vijay Kumar",
  age: 63,
  gender: "Male",
  disease: "Presbycusis",
  doctorId: "MCD029",
  doctorName: "Dr. Kunal Sharma",
  history: [
    {
      id: 1,
      date: "2026-01-20",
      diagnosis:
        "Patient presented with gradually progressive age-related hearing loss affecting both ears. Audiometry confirmed presbycusis.",
      medicines: [
        "Vitamin B Complex",
      ],
    },
    {
      id: 2,
      date: "2026-03-18",
      diagnosis:
        "Patient was fitted with bilateral hearing aids and counseled regarding hearing rehabilitation.",
      medicines: [],
    },
    {
      id: 3,
      date: "2026-05-21",
      diagnosis:
        "Speech discrimination improved with regular hearing aid use. No further deterioration noted.",
      medicines: [],
    },
    {
      id: 4,
      date: "2026-07-30",
      diagnosis:
        "Patient remained satisfied with hearing amplification. Annual audiological evaluation advised.",
      medicines: [],
    },
  ],
},
{
  id: "MCP224",
  name: "Divya Menon",
  age: 32,
  gender: "Female",
  disease: "Recurrent Epistaxis",
  doctorId: "MCD030",
  doctorName: "Dr. Aisha Thomas",
  history: [
    {
      id: 1,
      date: "2026-02-05",
      diagnosis:
        "Patient presented with repeated episodes of spontaneous anterior nasal bleeding over the previous month.",
      medicines: [
        "Oxymetazoline Nasal Spray",
        "Saline Nasal Gel",
      ],
    },
    {
      id: 2,
      date: "2026-02-20",
      diagnosis:
        "Silver nitrate cauterization was performed successfully. Bleeding episodes reduced markedly.",
      medicines: [
        "Saline Nasal Gel",
      ],
    },
    {
      id: 3,
      date: "2026-04-16",
      diagnosis:
        "No further episodes of significant epistaxis. Nasal mucosa healed well.",
      medicines: [],
    },
    {
      id: 4,
      date: "2026-06-24",
      diagnosis:
        "Routine ENT examination remained normal. Patient advised to maintain adequate nasal hydration.",
      medicines: [],
    },
    {
      id: 5,
      date: "2026-08-04",
      diagnosis:
        "Patient remained symptom-free with no recurrence during the last two months.",
      medicines: [],
    },
  ],
},
];

export default patientsData;