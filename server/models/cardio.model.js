const mongoose = require('mongoose');
const CardioSchema = new mongoose.Schema({     
        name: { type: String },
        ageGroup: { type: Number },
        gender: { type: String },
        weight: { type: Number },
        height: { type: Number },
        bodyType: { type: Number },
        activityLevel: { type: String },
        todayEx1: { type: String },
        todayEx1Comp: { type: Boolean },
        todayEx2: { type: String },
        todayEx2Comp: { type: Boolean },
        todayEx3: { type: String },
        todayEx3Comp: { type: Boolean },
        tomorrowEx1: { type: String },
        tomorrowEx1Comp: { type: Boolean },
        tomorrowEx2: { type: String },
        tomorrowEx2Comp: { type: Boolean },
        tomorrowEx3: { type: String },
        tomorrowEx3Comp: { type: Boolean },
        bmr: { type: Number },
        totalCal2Days: { type: Number },
        totalMin2Days: { type: Number },
        totalCalToday: { type: Number },
        totalMinToday: { type: Number },
        totalCalTomorrow: { type: Number },
        totalMinTomorrow: { type: Number },
        
        }, { timestamps: true });
    module.exports = mongoose.model('Cardio', CardioSchema);
const Cardio = mongoose.model('Cardio', CardioSchema);
module.exports = Cardio;
