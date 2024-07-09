function ServiceImage() {
  return (
    <div className="image-container w-full h-[240px] relative">
      <div className="blend-color w-full h-full bg-[#163C93] opacity-40 absolute"></div>
      <img
        className="service-image w-full h-full object-cover"
        src="https://www.figma.com/file/0N9QuVAydHaNFReRpdWmME/image/0f615676862aef146f752c8fc736725679ace39d"
        alt="AC-Cleaning-Picture"
      />
    </div>
  );
}

export default ServiceImage;
