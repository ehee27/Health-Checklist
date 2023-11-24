const healthData = {
    "male_20_30": {
        "age": "20-30",
        "sex": "Male", 
        "summary": {
            "description": "",
            "keyPoints": [
                "point 1",
                "point 2",
                "point 3"
            ]
        },  
        "healthMarkers": [
            {
                "type": "cardiovascular",
                "markers": {
                    "bloodPressure": "110/80",
                    "restingHeartRate": "60bpm",
                    "heartRateVariability": "45"
                }
            },
            {
                "type": "physical",
                "markers": {
                    "bodyMassIndex": 5, // tooltip explaining what this is & limitiations
                    "activeMinutesWeek":  150,   // have a struct for zone 2, high intesity minutes, strength training minutes
                    "averageMileTime": "7-8 mins", // kilometers as well
                    "pushUps": 25
                }
            },
            {
                "type": "flexibility",
                "markers": {
                    "squatRepTest": {"average": "27-29 reps", "aboveAverage": "30-32 reps", "excellent": ">34 reps"}, //"All the way/ half way/ barely anything", //step 2 : explaining the detriment of these not being where they should be
                    "sitAndReach": {"average": "17.5 in", "aboveAverage": "19.5 in", "excellent": "21.5 in"}
                    // "toeTouch": "All the way/ half way/ barely anything",
                    // "twist": "All the way/ half way/ barely anything",
                    // "HandsOverHead": "arm straight up/extend back no discomfort"
                }
            }
        ],
        "appointments": {
            "doctorCheckups": [
                "appointment 1",
                "appointment 2",
                "appointment 3",
                "screening 1",
                "screening 2"
            ],
            "dentalCheckups": [
                "appointment 1",
                "appointment 2"
            ]
        },
        "degradation": [
            {
                "name": "Key Lookouts",
                "text": "",
                "bulletPoints": []
            },
            {
                "name": "Longevity info",
                "text": "",
                "bulletPoints": []
            }
        ]
    },
    "female_40_59": {
        "age": "40-59",
        "sex": "Female", 
        "summary": {
            "description": "Women lose .5% bone density/yr starting in mid 30s. By post menopause up to 1.5% for average women, 3-5%/yr for those more prone to this issue. Most women begin to experience unintentional weight gain and loss of lean muscle mass. They may feel testy and short, tired and annoyed. They find it difficult to get a good night's sleep.",
            "keyPoints": [
                "Bone density starts to decrease .5%/.per year.",
                "Unintentional weight gain and lean muscle loss.",
                "Hormonal imbalances may negatively affect mood and sleep."
            ]
        },  
        "healthMarkers": [
            {
                "type": "cardiovascular",
                "markers": [
                    {"name": "bloodPressureAvg", 
                    "value": "124/75", 
                    "tooltip": ""},
                    {"name": "bloodPressureRange", 
                    "value": "124/75", 
                    "tooltip": ""},
                    {"name": "restingHeartRate", 
                    "value": "124/75", 
                    "tooltip": ""},
                    {"name": "heartRateVariability", 
                    "value": "124/75", 
                    "tooltip": ""}
                ]
            },
            {
                "type": "physical",
                "markers": {
                    "bodyMassIndexRange": {
                        "value": "24-36",
                        "tooltip": ""
                    },
                    "bodyMassIndexAvg": {
                        "value": "29",
                        "tooltip": "tooltip explaining what this is & limitiations"
                    },
                    "activeMinutesWeek":  {
                        "value":"150",
                        "tooltip": "minutes per week"
                    },
                    "strengthTraining": {
                        "value": "2",
                        "tooltip": "sessions per week"
                    },
                    "averageMileRange": { 
                        "value": "12:00 - 14:00",
                        "tooltip": "minutes"
                    },
                    "averageMileTime": {
                        "value": "13:00",
                        "tooltip": ""
                    },
                    "averageKiloRange": {
                        "value": "7:00 - 8:30",
                        "tooltip": ""
                    },
                    "averageKiloTime": {
                        "value": "7:45",
                        "tooltip": ""
                    },
                    "pushUps": {
                        "value": "7-14", 
                        "tooltip": "bent knee"
                    },
                    "pushUpsAvg": { 
                        "value": "10",
                        "tooltip": ""
                    }
                }
            },
            {
                "type": "flexibility",
                "markers": {
                    "squatRepTest": {"average": "15-17 reps", "aboveAverage": "18-20 reps", "excellent": ">23 reps"}, //step 2 : explaining the detriment of these not being where they should be
                    "sitAndReach": {"average": "17.5 in", "aboveAverage": "19.0 in", "excellent": "20.5 in"},
                    
                    // "twist": "All the way/ half way/ barely anything",
                    // "HandsOverHead": "arm straight up/extend back no discomfort"
                }
            }
        ],
        "appointments": {
            "doctorCheckups": [
                "Annual PCP Appointment",
                "Blood Pressure Screening",
                "Cholesterol Screening",
                "Diabetes Screening",
                "Breast Cancer Screening",
                "Cervical Cancer Screening",
                "Colorectal Cancer Screening",
                "Eye Exam"
            ],
            "dentalCheckups": [
                "Annual Dental Appointment",
            ]
        },
        "degradation": [
            {
                "name": "Key Lookouts",
                "text": "The most impactful diseases to lookout for are depression, cardiovascular disease. These are associated with a 2x chance of significantly decreased health. The worst behavior for risk of poor health outcomes is smoking at your age.\n\n In short, lookout for:",
                "bulletPoints": ["Cardiovascular health", "Depression", "Smoking"]
            },
            {
                "name": "Longevity info",
                "text": "Bone density and breast cancer carry your greatist risk for deteriorating your quality of life or increasing mortatlity rate. Make sure you're lifting weights and getting mammograms at regular intervals over these two decades.\n\n Most people by 50 cannot twist at all. Make sure you are doing what you can to train your ability to twist. Balance is also very important at your age, as your greatest risk for poor health outcomes from accidents come from falling once you get past your 50s.\n\n In short, lookout for:",
                "bulletPoints": ["Bone Density", "Breast Cancer", "Twist Flexibility", "Balance"]
            }
        ]
    }
};

export default healthData;