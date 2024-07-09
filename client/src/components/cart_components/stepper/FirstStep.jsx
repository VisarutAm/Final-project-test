import React from "react";
import { Stepper, Step, StepLabel, StepConnector } from "@mui/material";
import { styled } from "@mui/system";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";

const Connector = styled(StepConnector)(({ theme }) => ({
  alternativeLabel: {
    top: 22,
  },
  active: {
    "& $line": {
      borderColor: "#4C7FF4",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#4C7FF4",
    },
  },
  line: {
    borderColor: "#CCD0D7",
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));

const CustomStepIcon = ({ icon, active, completed }) => {
  const icons = {
    1: (
      <ArticleOutlinedIcon
        sx={{ color: active || completed ? "#4C7FF4" : "#CCD0D7" }}
      />
    ),
    2: (
      <ModeEditOutlineOutlinedIcon
        sx={{ color: active || completed ? "#4C7FF4" : "#CCD0D7" }}
      />
    ),
    3: (
      <CreditScoreOutlinedIcon
        sx={{ color: active || completed ? "#4C7FF4" : "#CCD0D7" }}
      />
    ),
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        border: `2px solid ${active || completed ? "#4C7FF4" : "#CCD0D7"}`,
        borderRadius: "50%",
      }}
    >
      {icons[icon]}
    </div>
  );
};

export default function FirstStep({ activeStep }) {
  return (
    <div className="stepper-container bg-[#FFFFFF] w-[77.77%] h-[129px] rounded-[10px] border-solid border-[1px] border-[#CCD0D7] absolute top-[271px] left-[160px] flex items-center justify-center">
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<Connector />}
      >
        <Step>
          <StepLabel StepIconComponent={() => <CustomStepIcon icon={1} />}>
            รายการ
          </StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={() => <CustomStepIcon icon={2} />}>
            กรอกข้อมูลบริการ
          </StepLabel>
        </Step>
        <Step>
          <StepLabel StepIconComponent={() => <CustomStepIcon icon={3} />}>
            ชำระเงิน
          </StepLabel>
        </Step>
      </Stepper>
    </div>
  );
}
