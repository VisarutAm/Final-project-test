import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function MuiBreadcrumbs() {
  const breadcrumbs = [
    <Link
      key="1"
      underline="none"
      variant="subtitle1"
      color="inherit"
      fontFamily="Prompt"
    >
      บริการของเรา
    </Link>,
    <Typography key="2" color="primary" variant="h4" fontFamily="Prompt">
      ล้างแอร์
    </Typography>,
  ];

  return (
    <div className="breadcrumb-container w-[300px] h-[68px] bg-white border-solid border-[1px] border-[#CCD0D7] rounded-[8px] gap-[12px] py-[10px] px-[32px] absolute top-[153px] left-[160px]">
      <Breadcrumbs separator="›" aria-label="breadcrumb" variant="subtitle1">
        {breadcrumbs}
      </Breadcrumbs>
    </div>
  );
}

export default MuiBreadcrumbs;
