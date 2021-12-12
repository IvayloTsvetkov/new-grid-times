import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <HeaderActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </HeaderActionGroup>
        <Logo />
        <HeaderRightGroup>
          <Button>Subscribe</Button>
          <Login>Already subscribed</Login>
        </HeaderRightGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const HeaderRightGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    justify-self: end;
    align-self: end;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;

const Login = styled.button`
  margin: 0 auto;
  text-decoration: underline;
  font-style: italic;
  font-size: ${14 / 16}rem;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const HeaderActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    grid-template-columns: 1fr auto 1fr;
  }
`;

export default Header;
