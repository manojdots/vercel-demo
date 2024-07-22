"use client";
import Link from "next/link";
import styled from "@emotion/styled";
import { List, ListItem } from "@mui/material";

export default function Sidebar() {
  return (
    <Section>
      <List>
        <ListItem>
          <Link href="/">Home</Link>
        </ListItem>
      </List>
    </Section>
  );
}

const Section = styled.div``;
