import React, { useState } from "react";
import { View ,TouchableOpacity, Image} from "react-native";
import Setting from "../Tabs/Setting";
import Users from "../Tabs/Users";
import styles from "./styles";

const Home =()=>{

    const [selectedTab, setselectedTab] = useState(0)


    const onTabPress=(index)=>{

        setselectedTab(index)


    }
    return(
        <View style={styles.container}>
            
            {selectedTab==0?<Users/>:<Setting/>}
            <View style={styles.bottomTab}>
                <TouchableOpacity
                style={styles.tab}
                onPress={()=>onTabPress(0)}
                >
                    <Image
                    source={require('../Assets/Images/group.png')}
                    style={ [styles.tabIcon,{tintColor:selectedTab===0?"white":"grey"}]}
                    />

                </TouchableOpacity>

                <TouchableOpacity
                 style={styles.tab}
                 onPress={()=>onTabPress(1)}
                >
                    <Image
                    style={ [styles.tabIcon,{tintColor:selectedTab===1?"white":"grey"}]}

                    source={require('../Assets/Images/settings.png')}
                    />

                </TouchableOpacity>

            </View>


        </View>
    )
}
export default Home