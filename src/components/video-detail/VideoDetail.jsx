import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "./../../service/api";
import { Box, Chip, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import {
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from "@mui/icons-material";
import { Loader, Videos } from "../index";

function VideoDetail() {
  const { id } = useParams();
  const [videoDetails, setVideoDetails] = useState([]);
  const [relatedVideo, setRelatedVideo] = useState([]);

  useEffect(() => {
    const getDate = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?part=snippet,statistics,contentDetails&id=${id}`
        );
        setVideoDetails(data.items[0]);

        const relateData = await ApiService.fetching(
          `search?part=snippet,id&relatedToVideoId=${id}&type=video`
        );
        setRelatedVideo(relateData.items);
      } catch (error) {
        console.log(error);
      }
    };

    getDate();
  }, [id]);

  if (!videoDetails?.snippet) return <Loader />;

  return (
    <Box minHeight={"90vh"} mb={10}>
      <Box display={"flex"} sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box width={{ xs: "100%", md: "75%" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
          {videoDetails?.snippet?.tags.map((item, idx) => (
            <Chip
              label={item}
              key={idx}
              sx={{ marginTop: "10px", cursor: "pointer", ml: "10px" }}
              deleteIcon={<Tag />}
              onDelete={() => {}}
              variant="outlined"
            />
          ))}
          <Stack
            direction={"row"}
            gap={"20px"}
            alignItems={"center"}
            pt={6}
            px={2}
          >
            <Stack
              sx={{ opacity: "0.7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <Visibility />
              {parseInt(
                videoDetails?.statistics?.viewCount
              ).toLocaleString()}{" "}
              views
            </Stack>
            <Stack
              sx={{ opacity: "0.7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <FavoriteOutlined />
              {parseInt(
                videoDetails?.statistics?.likeCount
              ).toLocaleString()}{" "}
              likes
            </Stack>
            <Stack
              sx={{ opacity: "0.7" }}
              direction={"row"}
              alignItems={"center"}
              gap={"3px"}
            >
              <MarkChatRead />
              {parseInt(
                videoDetails?.statistics?.commentCount
              ).toLocaleString()}{" "}
              comments
            </Stack>
          </Stack>
          <Typography variant="h5" fontWeight={"500"} p={2}>
            {videoDetails?.snippet?.title}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: "0.7" }} p={2}>
            {videoDetails?.snippet?.description}
          </Typography>
        </Box>
        <Box
          width={{ xs: "100%", md: "25%" }}
          px={2}
          py={{ md: 1, xs: 5 }}
          justifyContent={"center"}
          alignItems={"center"}
          overflow={"scroll"}
          maxHeight={"120vh"}
        >
          <Videos videos={relatedVideo} />
        </Box>
      </Box>
    </Box>
  );
}

export default VideoDetail;
