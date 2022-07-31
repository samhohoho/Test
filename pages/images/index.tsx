import {Box, Flex} from '@chakra-ui/react'
import React from 'react'
import useSWR from 'swr'
import MainLayout from '../../components/MainLayout'
import {fetcher} from '../../libs/fetcher'

export default function index() {
  const {data} = useSWR(
    'https://api.unsplash.com/search/photos?client_id=N9a24y9OSM_GZ38koCo4bZs8JXcW9yEabZe7BbJUKcQ&page=3&per_page=10&query=stars&w=1600',
    fetcher
  )

  console.log(data)

  return (
    <MainLayout>
      <Box>
        <Flex></Flex>
      </Box>
    </MainLayout>
  )
}
