import React from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';



class pdfReader extends React.Component{
    render(){
        return(
            <div style={{position:"absolute",height:"100%", width:"100%"}}>
            <PDFViewer width="100%" height="100%" >
            <Document>
                <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                    <Text>Majid Al Futaim</Text>
                </View>
                <View style={styles.title}>
                    <Text>Digital Duty Report</Text>
                </View>
                <View style={styles.title1}>
                    <Text>Date</Text>
                    <View>
                    <Text>: 12/12/1212</Text>
                    </View>
                </View>
                <View style={styles.title1}>
                    <Text>Name of Food Duty Manager Lunch Time</Text>
                    <View>
                    <Text>: Ammar</Text>
                    </View>
                </View>
                <View style={styles.title1}>
                    <Text>Present of Food Duty Manager Lunch Time</Text>
                    <View>
                    <Text>: Yes</Text>
                    </View>
                </View>
                <View style={styles.title1}>
                    <Text>Present of Food Duty Manager Evening Time</Text>
                    <View>
                    <Text>: Yes</Text>
                    </View>
                </View>
                <View style={styles.hr}
                />
                
                </Page>
            </Document>
            </PDFViewer>
            </div>
        )
    }
}
  export default pdfReader;


const styles = StyleSheet.create({
    page: { 
            
        },
    section: { 
            margin: 30,
            textDecoration:'underline',
            textDecorationColor:'white',
        },
    title: { 
            textAlign:'center',
            margin: 10,
            textDecoration:'underline',
            textDecorationColor:'white',
        },
    title1: {
        flexDirection:'row',
            justifyContent:'space-between',
            margin: 10,
        },
        hr:{
            alignSelf:"center",
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            width:'90%',
            margin:15,
        }
});