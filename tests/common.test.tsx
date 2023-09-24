import { render } from '@testing-library/react'
import 'jest-canvas-mock'
import {
  BeautifulButton,
  MainButton,
  SecondaryButton,
  Input,
  Accordion,
  Dropdown,
  DropdownBreaker,
  DropdownLink,
  PageContent,
  Page,
  Title,
  Header1,
  Header2,
  Header3,
  Lead,
  P,
  CenterX,
  CenterY,
  WFull,
  WFit,
} from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <div>
        <BeautifulButton>Beautiful Button</BeautifulButton>
        <MainButton>Main Button</MainButton>
        <SecondaryButton>Secondary Button</SecondaryButton>
        <Input />
        <Accordion label='Accordion'>Accordion Content</Accordion>
        <Dropdown label='Dropdown'>Dropdown Content</Dropdown>
        <DropdownBreaker />
        <DropdownLink href=''>Dropdown Link</DropdownLink>
        <PageContent>Page Content</PageContent>
        <Page>Page Content</Page>
        <Title>Title Content</Title>
        <Header1>Header1 Content</Header1>
        <Header2>Header2 Content</Header2>
        <Header3>Header3 Content</Header3>
        <Lead>Lead Content</Lead>
        <P>P Content</P>
        <CenterX>CenterX Content</CenterX>
        <CenterY>CenterY Content</CenterY>
        <WFull>WFull Content</WFull>
        <WFit>WFit Content</WFit>
      </div>,
    )
  })
})
