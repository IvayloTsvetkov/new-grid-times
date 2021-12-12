import React from "react";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <AnchorWrapper href={`/story/${id}`}>
      <InnerWrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
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

  @media ${QUERIES.tabletOnly} {
    padding: 0;

    &:not(:last-of-type) {
      border-bottom: none;
    }
  }
`;

const InnerWrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  gap: 16px;

  @media ${QUERIES.tabletOnly} {
    flex-direction: column;
    gap: 8px;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;

  @media ${QUERIES.tabletOnly} {
    margin-bottom: 8px;
  }
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
