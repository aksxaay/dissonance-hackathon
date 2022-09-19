import React from "react";
import "../App.css";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const FeaturedCard = () => {
  return (
    <Card className="w-96 pt-4 rounded-2xl bg-slate-200 mx-auto shadow-xl z-50">
      <CardHeader className="relative h-auto mt-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" fill-rule="evenodd"><path d="M35.354 68.687h19.1c4.953 0 6.75-.516 8.56-1.484s3.232-2.39 4.2-4.2 1.484-3.607 1.484-8.56v-19.1H89.64c3.602 0 4.908.375 6.225 1.08a7.34 7.34 0 0 1 3.055 3.055c.704 1.317 1.08 2.623 1.08 6.225V89.64c0 3.602-.375 4.908-1.08 6.225a7.34 7.34 0 0 1-3.055 3.055c-1.317.704-2.623 1.08-6.225 1.08H45.713c-3.602 0-4.908-.375-6.225-1.08a7.34 7.34 0 0 1-3.055-3.055c-.704-1.317-1.08-2.623-1.08-6.225V68.687z" fill="#fbefa8"></path><path d="M87.88 74.277c0-.957-.79-1.733-1.766-1.733s-1.766.776-1.766 1.733v7.686L74.06 71.864a1.79 1.79 0 0 0-2.496 0 1.71 1.71 0 0 0 0 2.45L81.85 84.413h-7.828c-.976 0-1.766.776-1.766 1.733s.79 1.733 1.766 1.733h12.1a1.81 1.81 0 0 0 .674-.133c.43-.175.776-.513.954-.937.1-.21.136-.436.136-.66l.002-11.87z" fill="#b7a001" fill-rule="nonzero"></path><path d="M10.36 0h43.928c3.602 0 4.908.375 6.225 1.08a7.34 7.34 0 0 1 3.055 3.055c.704 1.317 1.08 2.623 1.08 6.225v43.928c0 3.602-.375 4.908-1.08 6.225a7.34 7.34 0 0 1-3.055 3.055c-1.317.704-2.623 1.08-6.225 1.08H10.36c-3.602 0-4.908-.375-6.225-1.08a7.34 7.34 0 0 1-3.055-3.055C.375 59.196 0 57.89 0 54.287V10.36C0 6.757.375 5.45 1.08 4.134a7.34 7.34 0 0 1 3.055-3.055C5.45.375 6.757 0 10.36 0z" fill="#d6bf2d"></path><path d="M6.444 37.69V26.63c0-.93.608-1.558 1.558-1.558S9.56 25.7 9.56 26.63v3.876h5.662V26.63c0-.93.608-1.558 1.558-1.558s1.558.627 1.558 1.558V37.69c0 .93-.608 1.558-1.558 1.558s-1.558-.627-1.558-1.558v-4.56H9.56v4.56c0 .93-.608 1.558-1.558 1.558s-1.558-.627-1.558-1.558zm18.126 0v-9.747h-2.945c-.893 0-1.615-.456-1.615-1.31s.722-1.31 1.615-1.31h9.006c.893 0 1.615.456 1.615 1.31s-.722 1.31-1.615 1.31h-2.945v9.747c0 .93-.608 1.558-1.558 1.558s-1.558-.627-1.558-1.558zm9.29.038V26.612c0-1.254.855-1.54 1.69-1.54h.912c.97 0 1.425.38 1.748 1.425l2.717 8.778h.038l2.68-8.778c.323-1.045.78-1.425 1.748-1.425h.874c.836 0 1.69.285 1.69 1.54v11.115c0 .78-.38 1.52-1.387 1.52s-1.387-.74-1.387-1.52v-8.474h-.038l-2.907 9.082c-.21.646-.684.912-1.33.912s-1.12-.266-1.33-.912l-2.907-9.082h-.038v8.474c0 .78-.38 1.52-1.387 1.52s-1.387-.74-1.387-1.52zm16.93-.55V26.63c0-.93.608-1.558 1.558-1.558s1.558.627 1.558 1.558v9.747h5.206c.893 0 1.615.456 1.615 1.31S60.005 39 59.112 39h-6.498c-1.102 0-1.824-.437-1.824-1.824z" fill="#fff" fill-rule="nonzero"></path></svg>
        <img
          src="data:image/png;base64,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"
          alt="img-blur-shadow"
          className="h-full w-full object-cover rounded-xl"
        />

      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          PDF to Text
        </Typography>
        <Typography>
          Use OCR technology to extract text from Image based Documents
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small ">
          <span className="font-bold">Free</span>
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="flex align-text-bottom"
        >
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]align-text-bottom">
            Premium, 
          </i>
          <span className="font-semibold">Ad-free</span>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default FeaturedCard;
