import { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

// 設定日曆語系
LocaleConfig.locales['zh'] = {
  monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
  dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
  dayNamesShort: ['日','一','二','三','四','五','六'],
  today: "今日"
};
LocaleConfig.defaultLocale = 'zh';

export default function CalendarScreen() {
 


  const [selected, setSelected] = useState('2026-03-31');

  // 測試資料
  const taskData = {
    '2026-03-31': ['今天要交 APP 期中作業', '晚上跟同學討論程式'],
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.card}>
          <Calendar
            onDayPress={day => setSelected(day.dateString)}
            markedDates={{
              ...Object.keys(taskData).reduce((acc, date) => {
                acc[date] = { marked: true, dotColor: '#f3acc1' };
                return acc;
              }, {}),
              [selected]: { 
                selected: true, 
                selectedColor: '#f3acc1', 
                selectedTextColor: 'white' 
              }
            }}
            theme={{
              todayTextColor: '#f3acc1',
              arrowColor: '#f3acc1',
              textMonthFontWeight: 'bold',
            }}
          />
        </View>

        <View style={styles.taskCard}>
          <Text style={styles.taskTitle}>{selected} 的任務</Text>
          {taskData[selected] ? (
            taskData[selected].map((item, index) => (
              <Text key={index} style={styles.taskItem}>• {item}</Text>
            ))
          ) : (
            <Text style={styles.noTaskText}>這天目前沒有安排任務</Text>
          )}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff5f7' },
  scrollContent: { padding: 20 },
  card: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 20,
  },
  taskCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    minHeight: 120,
    elevation: 4,
  },
  taskTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#f3acc1' },
  taskItem: { fontSize: 16, color: '#555', marginBottom: 5 },
  noTaskText: { color: '#bbb', textAlign: 'center', marginTop: 20 }
});

