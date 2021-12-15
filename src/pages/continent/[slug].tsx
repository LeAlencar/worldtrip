import { Flex } from '@chakra-ui/react';
import Head from "next/head";
import { useRouter } from "next/router";
import ContinentBanner from '../../components/ContinentBanner';
import Content from '../../components/CountryContent';
import Header from '../../components/Header';

export default function Continent({continent}) {
    const router = useRouter();
    
    return (
      <Flex direction="column">
        <Head>
          <title>WorldTrip - Europe</title>
        </Head>
  
        <Header />
        <ContinentBanner />
  
        <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
            <Content />
        </Flex>
      </Flex>
    )
  }