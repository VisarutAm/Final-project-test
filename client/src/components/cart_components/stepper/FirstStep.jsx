import React from "react";
import { Stepper, Step, StepLabel, StepConnector } from "@mui/material";
import { styled } from "@mui/system";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
import { stepConnectorClasses } from "@mui/material/StepConnector";
import { blue } from "@mui/material/colors";

const Connector = styled(StepConnector)(({ lineColor }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 17,
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: lineColor,
    borderWidth: 2,
  },
}));

const CustomStepIcon = ({ icon, iconColor, borderColor }) => {
  const icons = {
    1: <ArticleOutlinedIcon sx={{ color: iconColor }} />,
    2: <ModeEditOutlineOutlinedIcon sx={{ color: iconColor }} />,
    3: <CreditScoreOutlinedIcon sx={{ color: iconColor }} />,
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        border: `2px solid ${borderColor}`,
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
      <div className="w-full">
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          connector={<Connector lineColor="#CCD0D7" />}
        >
          <Step>
            <StepLabel
              StepIconComponent={() => (
                <CustomStepIcon
                  icon={1}
                  iconColor={blue[500]}
                  borderColor={"#4C7FF4"}
                />
              )}
            >
              <p className="text-blue-500 font-prompt text-[16px]">รายการ</p>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel
              StepIconComponent={() => (
                <CustomStepIcon
                  icon={2}
                  iconColor={"#CCD0D7"}
                  borderColor={"#CCD0D7"}
                />
              )}
              sx={{
                "& .MuiStepLabel-label": {
                  color: "#CCD0D7",
                  fontFamily: "Prompt",
                  fontSize: 16,
                },
              }}
            >
              กรอกข้อมูลบริการ
            </StepLabel>
          </Step>
          <Step>
            <StepLabel
              StepIconComponent={() => (
                <CustomStepIcon
                  icon={3}
                  iconColor={"#CCD0D7"}
                  borderColor={"#CCD0D7"}
                />
              )}
              sx={{
                "& .MuiStepLabel-label": {
                  color: "#CCD0D7",
                  fontFamily: "Prompt",
                  fontSize: 16,
                },
              }}
            >
              ชำระเงิน
            </StepLabel>
          </Step>
        </Stepper>
      </div>
    </div>
  );
}
