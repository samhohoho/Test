import {Box, Flex, Link, Stack} from '@chakra-ui/react'
import React from 'react'
import NextLink from 'next/link'

export default function MainHeader() {
  return (
    <Box>
      <Flex
        bg={'transparent'}
        color="white"
        minH={'70px'}
        py={2}
        px={4}
        alignItems="center"
      >
        <DesktopNav />
      </Flex>
    </Box>
  )
}

interface NavItem {
  label: string
  href: string
  isExternal: boolean
}

const DesktopNav = () => {
  const NAV_ITEMS: Array<NavItem> = [
    {label: 'About', href: '/images', isExternal: false},
    {label: 'Blog', href: '/#', isExternal: false},
    {label: 'Register', href: '/#', isExternal: false},
    {label: 'Login', href: '/#', isExternal: false},
  ]

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NextLink href={navItem.href} passHref>
            <Link
              isExternal={navItem.isExternal}
              fontWeight="500"
              p={2}
              fontSize={'md'}
              color={'white'}
              _hover={
                {
                  // textDecoration: 'none',
                }
              }
            >
              {navItem.label}
            </Link>
          </NextLink>
        </Box>
      ))}
    </Stack>
  )
}
