"use client";
import styled from "@emotion/styled";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <Section>
      <Sidebar />
      <RightSide>
        Right side
        {children}
      </RightSide>
    </Section>
  );
}

const Section = styled.div`
  display: flex;
`;

const RightSide = styled.div`
  width: 70%;
`;
