import styled from "styled-components";

export const BodySection = styled.section`
  display: ${(props) => (props.grid ? "grid" : "flex")};
  flex-direction: ${(props) => (props.grid ? "row" : "column")};
  grid-template-columns: 55% 45%;
  width: auto;
  align-items: center;
  margin: ${(props) => (props.grid ? "90px 90px 0px 90px" : "0 0 0 20px")};
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  height: auto;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-template-columns: 100% 0;
    margin: 30px 0 0 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const SectionDivider = styled.div`
  width: 64px;
  border: 1px soli yellow;
  height: 5px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.gradient};
  margin: ${(props) => (props.divider ? "40px  0" : " 0 0 0 auto")};

  @media ${(props) => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
    margin: auto;
    margin-top: 80px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;

export const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "40px" : "38px")};
  line-height: ${(props) => (props.main ? "50px" : "30px")};
  width: max-content;
  max-width: 100%;
  background: ${(props) => props.theme.colors.sectionTitle};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 14px;
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "40px" : "36px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 18px;
  line-height: 30px;
  font-weight: 300;
  padding: 20px;
  color: ${(props) => props.theme.colors.text}
  background-color: ${(props) => props.theme.colors.navbarBackground};
  box-shadow: ${(props) => props.theme.colors.borderShadow};


  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 16px;
    line-height: 28px;
    padding-bottom: 20px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 16px;
  }
`;
