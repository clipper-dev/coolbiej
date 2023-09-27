import React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'
import {
  MainButton,
  SecondaryButton,
  Input,
  Accordion,
  AccordionDrawer,
  Dropdown,
  DropdownHeader,
  DropdownItem,
  DropdownBreaker,
  PageContent,
  Page,
  Display,
  Title,
  Headline,
  Header,
  Body,
  Label,
  Code,
  Small,
  NavItem,
  TableTextBody,
  TableTextHeader,
  TableTextSmall,
  CenterX,
  CenterY,
  WFull,
  WFit,
} from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <div>
        {/* experimental  <BeautifulButton>Beautiful Button</BeautifulButton> */}
        <MainButton>Main Button</MainButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
        <Input />
        <Accordion label={'Accordion'}>
          <AccordionDrawer>Accordion Drawer</AccordionDrawer>
        </Accordion>
        <Dropdown label={'Dropdown'}>
          <DropdownHeader>Dropdown Header</DropdownHeader>
          <DropdownItem>Dropdown Item</DropdownItem>
          <DropdownBreaker />
          <DropdownItem>Dropdown Item</DropdownItem>
        </Dropdown>
        {/*  <DropdownLink href=''>Dropdown Link</DropdownLink> */}
        <PageContent>Page Content</PageContent>
        <Page>Page Content</Page>
        <Display>Display Content</Display>
        <Title>Title Content</Title>
        <Headline>Headline Content</Headline>
        <Header>Header Content</Header>
        <Body>Body Content</Body>
        <Label>Label Content</Label>
        <Code>Code Content</Code>
        <Small>Small Content</Small>
        <NavItem>NavItem Content</NavItem>
        <TableTextBody>TableTextBody Content</TableTextBody>
        <TableTextHeader>TableTextHeader Content</TableTextHeader>
        <TableTextSmall>TableTextSmall Content</TableTextSmall>
        <CenterX>CenterX Content</CenterX>
        <CenterY>CenterY Content</CenterY>
        <WFull>WFull Content</WFull>
        <WFit>WFit Content</WFit>
      </div>,
    )
  })
})
