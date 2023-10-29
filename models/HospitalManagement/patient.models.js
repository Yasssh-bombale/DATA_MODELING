import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    patient_name: {
      type: String,
      required: true,
    },
    diagnosedWith: {
      type: String,
      required: true,
    },
    patient_age: {
      type: String,
      required: true,
    },
    patient_address: {
      type: String,
      required: true,
    },
    patient_bloodGroup: {
      type: String,
      enum: ["A", "A+", "B", "B+", "AB", "AB+", "A-", "B-", "AB-", "O+", "O-"],
      required: true,
    },
    patient_Gender: {
      type: String,
      enum: ["MALE", "FEMALE", "GEY"],
      required: true,
    },
    patient_admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);
