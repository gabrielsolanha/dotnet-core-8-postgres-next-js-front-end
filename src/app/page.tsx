"use client";
import { Button, Grid, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CarouselDepiled from "../components/CarouselDepiled";
import GridCardHome from "../components/GridCardHome";


export default function Home() {
  return (
    <>
      <CarouselDepiled></CarouselDepiled>
      <GridCardHome></GridCardHome>
    </>
  );
}
