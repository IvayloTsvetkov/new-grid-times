import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const MiniStory = ({ id, image, title }) => {
  return (
    <Wrapper href={`/story/${id}`}>
      <InnerWrapper>
        <Image alt={image.alt} src={image.src} />
        <Title>{title}</Title>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.a`
  @media ${QUERIES.tabletAndUp} {
    min-width: 220px;
  }
`;

const InnerWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Image = styled.img`
  width: 100%;
  aspect-ratio: 220 / 132;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  color: var(--color-gray-900);
`;

export default MiniStory;
