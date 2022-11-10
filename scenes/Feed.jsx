import {ScrollView} from "react-native"
import styles from "../styles"
import photolist from "../photolist"
import Post from "../components/Post"

export default function Feed() {

    return(
    <>
    <ScrollView style={styles.feed}>
        {photolist.map(photo => (
            <Post post={photo} key={photo.id}/>
        ))}
    </ScrollView>
    </>

    )
}