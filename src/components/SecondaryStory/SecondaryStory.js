import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const SecondaryStory = ({ id, title, image, location, abstract }) => {
  return (
    <AnchorWrapper href={`/story/${id}`}>
      <InnerWrapper>
        <Image alt={image.alt} src={image.src} />
        <Heading>{title}</Heading>
        <AbstractWrapper>
          <Abstract>{abstract}</Abstract>
        </AbstractWrapper>
      </InnerWrapper>
    </AnchorWrapper>
  );
};

const AnchorWrapper = styled.a`
  padding-top: 16px;
  padding-bottom: 16px;

  &:not(:last-of-type) {
    border-bottom: 1px solid var(--color-gray-300);
  }

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
  }
`;

const InnerWrapper = styled.article`
  display: grid;
  grid-template-areas:
    "image heading"
    "image abstract";
  gap: 4px 16px;
  grid-template-columns: 120px 1fr;
  color: var(--color-gray-900);

  @media ${QUERIES.tabletOnly} {
    grid-template-columns: 1fr;
    grid-template-areas:
      "image"
      "heading"
      "abstract";
  }
`;

const Image = styled.img`
  grid-area: image;
  display: block;
  width: 100%;
  height: 120px;
  border-radius: 4px;
  object-fit: cover;

  @media ${QUERIES.tabletOnly} {
    margin-bottom: 11px;
  }
`;

const Heading = styled.h2`
  grid-area: heading;
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
  /* Optical alignment */
  margin-top: -2px;
`;

const AbstractWrapper = styled.div`
  grid-area: abstract;
`;

const Abstract = styled.p`
  font-size: 1rem;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

export default SecondaryStory;
