import React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'
import * as core from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <div>
        {/* experimental  <BeautifulButton>Beautiful Button</BeautifulButton> */}
        <core.TriangleIcon />
        <core.MainButton>Main Button</core.MainButton>
        <core.SecondaryButton>Secondary Button</core.SecondaryButton>
        <core.Toggle
          checked={false}
          onChange={() => {
            console.log('toggle')
          }}
        />
        <core.Toggle
          checked={true}
          onChange={() => {
            console.log('toggle')
          }}
        />
        <core.Action>Action</core.Action>
        <core.Caution>Caution</core.Caution>
        <core.Input />
        <core.Accordion label={'Accordion'}>
          <core.AccordionDrawer>Accordion Drawer</core.AccordionDrawer>
        </core.Accordion>
        <core.Dropdown label={'Dropdown'}>
          <core.DropdownHeader>Dropdown Header</core.DropdownHeader>
          <core.DropdownItem>Dropdown Item</core.DropdownItem>
          <core.DropdownBreaker />
          <core.DropdownItem>Dropdown Item</core.DropdownItem>
        </core.Dropdown>
        {/*  <DropdownLink href=''>Dropdown Link</DropdownLink> */}
        <core.PageContent>Page Content</core.PageContent>
        <core.Page>Page Content</core.Page>
        <core.Display>Display Content</core.Display>
        <core.Title>Title Content</core.Title>
        <core.Headline>Headline Content</core.Headline>
        <core.Header>Header Content</core.Header>
        <core.Body>Body Content</core.Body>
        <core.Label>Label Content</core.Label>
        <core.Code>Code Content</core.Code>
        <core.Small>Small Content</core.Small>
        {/* table */}
        <core.Table>
          <core.TableHead>
            <core.TableHeader strong>Name</core.TableHeader>
            <core.TableHeader>Company</core.TableHeader>
            <core.TableHeader>Position</core.TableHeader>
            <core.TableHeader></core.TableHeader>
          </core.TableHead>
          <core.TableBody>
            <core.TableRow>
              <core.TableCell strong>John Doe</core.TableCell>
              <core.TableCell>Google</core.TableCell>
              <core.TableCell>Software Engineer</core.TableCell>
              <core.TableCell className='flex flex-row gap-4' align='left'>
                <core.Action>Edit</core.Action>
                <core.Caution>Delete</core.Caution>
              </core.TableCell>
            </core.TableRow>
          </core.TableBody>
        </core.Table>
        <core.NavItem>NavItem Content</core.NavItem>
        <core.CenterX>CenterX Content</core.CenterX>
        <core.CenterY>CenterY Content</core.CenterY>
        <core.WFull>WFull Content</core.WFull>
        <core.WFit>WFit Content</core.WFit>
      </div>,
    )
  })
})
