import { View, Text, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import { StyleSheet } from 'react-native'

const App = () => {
  const data = [
    { text: 'Mobiles', source: require('./assets/img1.png'), bgColor:'#92b2ff' },
    { text: 'Grocery', source: require('./assets/img22.png'), bgColor:'#4f975d' },
    { text: 'Medicines', source: require('./assets/img3.png'), bgColor:'#92b2ff' },
    { text: 'Credit', source: require('./assets/img4.png'), bgColor:'#ab61f2' },
  ];
  const payData = [
    { id:1, source: require('./assets/pay1.png'), text:'Scan & Pay' },
    { id:2, source: require('./assets/pay2.png'), text:'Send Money' },
    { id:3, source: require('./assets/pay3.png'), text:'Pay bills' },
    { id:4, source: require('./assets/pay4.png'), text:'Loan & Card' },
  ];
  const disData = [
    { id:1, source: require('./assets/dis1.png'), disType:"Instant", disAmount:"Delivery", bgColor:'#d6bc4d' },
    { id:2, source: require('./assets/dis2.png'), disType:"Min", disAmount:"10% off", bgColor:'#13796c' },
    { id:3, source: require('./assets/dis3.png'), disType:"FLAT", disAmount:"50% off", bgColor:'#6d4999' },
    { id:4, source: require('./assets/dis4.png'), disType:"₹99", disAmount:"store", bgColor:'#7d1372' },
  ]
  const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      color: "white",
      padding: 15,
      gap:12,
      backgroundColor:'black'
    },

    // categories section
    categoriesContainer:
    {
      flexDirection:'row',
      justifyContent:'space-between'
    },
    categoriesDiv:
    {
      width: 70,
      height:70,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center'
    },
    img: 
    {
      width: 40,
      height: 40,
      resizeMode: 'contain',
    },

    // hero image slider
    heroImg:
    {
      height:187,
      width: '100%',
      resizeMode: 'contain',
      borderRadius:5,
    },

    // payment section
    paySection:
    {
      flexDirection:'row',
      justifyContent:'space-between'
    },
    payContainer:
    {
      backgroundColor:'#2a2a2a',
      width: 70,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
    },
    payImg: 
    {
      height:30,
      width: '100%',
      resizeMode: 'contain',
    },

    // neuPass section
    neuPass:
    {
      backgroundColor:'#7d35bd',
      flexDirection:'row',
      borderRadius: 10,
      gap:20,
      borderRadius:10
    },
    logoContainer:
    {
      flexDirection:'row',
      alignItems: 'center',
      gap: 5,
      backgroundColor:'#a33cfd',
      padding:10,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    aboutCoins:
    {
      color:"#fff",
      justifyContent:'center',
    },

    // discount section 
    discount:
    {
      flexDirection:'row',
      gap: 20,
      flexWrap: 'wrap',
      paddingTop:10,
    },
    discountSection:
    {
      flexDirection:'row',
      width:'46%',
      height:100,
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10,
    },
    discountAmount:
    {
      color:'#fff',
      height:70,
      width:70,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
    },
    disImgContainer:
    {
      height:70,
      width:70,
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
    }
  })
  return (
    <View style={styles.container}>
      <StatusBar/>

      {/* Different categories section */}
      <View style={styles.categoriesContainer}>
        {data.map((items, index) => (
          <View style={{alignItems:'center'}} key={index}> 
            <View style={{ ...styles.categoriesDiv, backgroundColor: items.bgColor }}>
              <Image source={items.source} style={styles.img} /> 
            </View>
            <View>
              <Text style={{color:'#fff'}}> {items.text} </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Hero slider image section */}
      <View>
        <Image source={require('./assets/hero-img1.jpg')} style={styles.heroImg}/> 
      </View>

      {/* Payment section */}
      <View style={styles.paySection}>
        {payData.map((items, index)=>(
          <View style={{alignItems:'center'}} key={index}>
            <View style={styles.payContainer}>
              <Image source={items.source} style={styles.payImg} /> 
            </View>
            <View>
              <Text style={{color:'#fff', fontSize:12}}> {items.text} </Text>
            </View>
          </View>
        ))}

      </View>

      {/* NeuPass section */}
      <View style={styles.neuPass}>
        <View style={styles.logoContainer}>
          <Image source={require('./assets/neu-logo.png')} style={{width:30, height:30, backgroundColor:'white', borderRadius:50}} />
          <View>
            <Text style={{color:'#fff'}}> NEU </Text>
            <Text style={{color:'#e35949', marginTop:-3}}> PASS </Text>
          </View>
        </View>

        <View style={styles.aboutCoins}>
          <Text style={{color:'#cfcbca'}}> Availaible NeuCoins </Text>
          <Text style={{color:'#fff'}}> 121 </Text>
        </View>

        <View style={{alignItems:'center', justifyContent:'center'}}>
          <View style={{ backgroundColor:'#8a4ac2', alignItems:'center', justifyContent:'center', width:30,height:30, borderRadius:5, }}>
            <Text style={{color:'#fff'}}> &#x003E; </Text>
          </View>
        </View>
      </View>
      
      {/* discount section */}
      <View style={styles.discount}>
        {disData.map((item, index)=>(
          <View style={{...styles.discountSection, backgroundColor: item.bgColor }} key={index}>
            <View style={styles.disImgContainer}>
              <Image source={item.source} style={{width:70, resizeMode:'contain'}} />
            </View>
            <View style={styles.discountAmount}>
              <Text style={{color:'#fff', fontWeight:'bold'}}> {item.disType} </Text>
              <Text style={{color:'#fff', fontWeight:'bold'}}> {item.disAmount} </Text>
            </View>
          </View>     
        ))}
      </View>

      {/* Footer section */}
      <View>
        <Text style={{color:'#fff', textAlign:'center'}}> Created with ❤️ by Abhishek Das </Text>
      </View>

    </View>
  )
}

export default App