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
      <CardHeader color="blue" className="relative h-72 mt-0">
        <img
          src="https://images.pexels.com/photos/736230/pexels-photo-736230.jpeg?cs=srgb&dl=pexels-jonas-kakaroto-736230.jpg&fm=jpg"
          alt="img-blur-shadow"
          className="h-full w-full object-cover rounded-md"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          Cozy 5 Stars Apartment
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small ">
          <span className="font-bold">$899</span>/night
        </Typography>
        <Typography
          variant="small"
          color="gray"
          className="flex align-text-bottom"
        >
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]align-text-bottom">
            Barcelona,
          </i>
          <span className="font-semibold">Spain</span>
        </Typography>
      </CardFooter>
    </Card>
  );
};

export default FeaturedCard;
