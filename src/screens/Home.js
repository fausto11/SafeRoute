import { View, Text, Button ,Alert, SafeAreaView, FlatList} from 'react-native'
import React, { useEffect, useState } from 'react'
import ReportList from '../components/ReportList';
import Layout from '../components/Layout';
import { getReports } from '../api/api';

export default function Home() {
 

  return (
    <SafeAreaView >
    <Layout>
        <ReportList ></ReportList>
    </Layout>

  </SafeAreaView>
    
  );
}
