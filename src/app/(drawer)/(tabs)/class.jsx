import { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, } from "react-native";
import useTaskStore from "../../../../store/useTaskStore";

export default function Class() {
    const { categories, addCategory } = useTaskStore(); //這裡是把taskstore的資料拿過來
    const [newCate, setNewCate] = useState(''); //新增新的分類所需
    const [isAdding, setIsAdding] = useState(false); //能反應要輸入新分類的變化

    const saveAdd = () => {
        if (newCate.trim()) {
            addCategory(newCate.trim());
            setNewCate('');
            setIsAdding(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Class</Text>

            {/*這裡是按鈕，當按下新增會變成輸入分類的地方*/}
            <View>
                {!isAdding ?
                    (
                        <View>
                        {/*只是個按鈕*/}
                            <TouchableOpacity style={styles.button} onPress={()=>setIsAdding(true)}>
                                <Text>新增分類</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View>
                            {/*變成輸入處*/}
                            <TextInput
                                placeholder="請輸入分類名稱..."
                                value={newCate}
                                onChangeText={setNewCate}
                                
                            />

                            <TouchableOpacity onPress={saveAdd}>
                                <Text>送出</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setIsAdding(false)}>
                                <Text>取消</Text>
                            </TouchableOpacity>

                        </View>
                    )
                }
            </View>


            {/*這裡是能列出現在有的分類的表單*/}
            <FlatList
                data={categories}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <View >
                        {/*這裡是顯示區 可以用style調*/}
                        <Text>{item}</Text>
                    </View>
                )}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})