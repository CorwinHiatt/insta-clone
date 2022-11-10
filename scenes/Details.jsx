import { View } from "react-native"
import Post from "../components/Post"
import photolist from "../photolist"
import {Text} from "@rneui/base"
import styles from "../styles"


export default function Details({route: {params: {itemId }}, navigation  }) {
    const post = photolist.find(photo => photo.id === itemId )
    return(
        <View>

            <Post post = {post} navigation={navigation} />

        </View>
    )
}