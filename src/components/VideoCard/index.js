import React from 'react'
import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  overflow: hidden;
  cursor: pointer;
  color: white;
  width: 100%;
  height: 40%;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;

function getYouTubeId(youtubeURL) {
    return youtubeURL
        .replace(
            /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
            '$7',
        );
}

function VideoCard({ videoURL}) {
    const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
    return (
        <VideoCardContainer
            url={image}
            href={videoURL}
            target="_blank"
        />
    );
}

export default VideoCard;