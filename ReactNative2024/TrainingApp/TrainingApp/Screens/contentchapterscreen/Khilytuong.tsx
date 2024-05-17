import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { User, MainComponent, Notification} from 'iconsax-react-native';
import Nhietdo from './Nhietdo';


const Khilytuong = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Định luật Khí lý tưởng</Text>
        <Text style={styles.content}>&emsp;Định luật Khí lý tưởng được xuất phát từ Lý thuyết phân tử chuyển động. Bây giờ sau khi bạn đã xem xét một số định luật của khí, bạn có thể diễn đạt lại Lý thuyết phân tử chuyển động và nhận ra rằng theo lý tưởng, các phân tử khí:{'\n'}
• Nên cách xa nhau càng xa càng tốt (áp suất thấp và nhiệt độ cao là điều kiện tốt nhất cho điều này){'\n'}
• Nên có càng ít khối lượng càng tốt (như H₂ hoặc He){'\n'}
• Nên không có sự hấp dẫn với nhau (chúng ta sẽ thảo luận về các phân tử không có cực và lực hấp dẫn sau trong sách){'\n'}
&emsp;Cần lưu ý rằng các khí thực sự không tuân theo tính lý tưởng, và có các phương trình có thể điều chỉnh các tính toán để bù đắp cho tình huống không lý tưởng. Tuy nhiên, những phương trình này là phức tạp và nằm ngoài phạm vi của bài đánh giá này.
Theo định nghĩa, một khí lý tưởng tuân theo phương trình PV = nRT. Bạn sẽ nhận thấy hai biến mới trong phương trình này, n và R. Biến n đại diện cho số mol của khí và R là một hằng số. Trước khi bạn có thể sử dụng phương trình này, bạn phải trở nên quen với khái niệm mol và ý nghĩa của nó.
{'\n'}&emsp;Nếu bạn mua một tá trứng, bạn mong đợi mở hộp và tìm thấy bên trong 12 quả trứng. Thuật ngữ "tá" được sử dụng như một thay thế cho từ "mười hai". Cùng một ý tưởng áp dụng khi sử dụng thuật ngữ "mol". Một mol của "một cái gì đó" bằng với 6.02 × 1023 "đối tượng" đó. Ví dụ, một mol nguyên tử cacbon là 6.02 × 1023 nguyên tử cacbon. Số 6.02 × 1023 cũng được biết đến với tên là Số Avogadro.
Còn với hằng số R, giá trị của hằng số này phụ thuộc vào các đơn vị được sử dụng cho áp suất, nhiệt độ và thể tích. Khi bạn sử dụng các đơn vị thông thường của lít, atmosphère và Kelvin, giá trị và đơn vị là 0.0820 (L•atm)/(mol•K).


</Text>

        <Text style={styles.mtitle1}>Bài toán</Text>
        <Text style={styles.content}>&emsp;Có bao nhiêu phân tử của khí H₂ có mặt trong một mẫu có thể 11.2 lít ở 273 K và áp suất 760 mm Hg?
</Text>
<Text style={styles.mtitle1}>Giải pháp</Text>
        <Text style={styles.content}>&emsp;Áp suất là 760 mm Hg; điều này bằng 1.0 atm. Thể tích của khí là 11.2 lít và nhiệt độ là 273 K. Từ trên, bạn biết rằng R = 0.0820 (L•atm)/(mol•K). Định luật Khí lý tưởng là PV = nRT. Thay thế cho phương trình ta có: (1.0 atm)(11.2 L) = (n)(0.0820L•atm)/(mol•K)(273 K).


</Text>
<View style={styles.boximg}><Image
                source={require('../anhlythuyet/Congthuc13Chapter2.png')}
                style={styles.image3}
              /></View>

<Text style={styles.content}>&emsp;Giải pháp cho kết quả là 0.50 mol khí H₂. Vì một mol của một khí chứa 6.02 × 1023 phân tử của khí, 0.50 mol của khí sẽ chứa một nửa số Avogadro, tức là 3.01 × 1023 phân tử khí H₂.


</Text>
<Text style={styles.title}>Chất lỏng</Text>
        <Text style={styles.content}>&emsp;Chất lỏng được đặc trưng bởi thể tích xác định của chúng. Khác với khí, chất lỏng (đa phần) không thể được nén. Chất lỏng, giống như khí, không có hình dạng xác định và sẽ có hình dạng của bình chứa mà chúng được đặt vào. Các phân tử của chất lỏng liên tục tiếp xúc với nhau do những lực tồn tại giữa chúng và giữ chúng lại. Tuy nhiên, những lực này không đủ mạnh để giữ các phân tử ở một vị trí cố định như trong trường hợp của chất rắn.{'\n'}
        &emsp;Chất lỏng liên tục bay hơi tại bề mặt của chúng. Đó là, các phân tử ở bề mặt của chất lỏng có thể đạt đủ năng lượng động để vượt qua các lực giữa chúng và chuyển sang pha khí. Quá trình này được gọi là sự hơi bốc, hoặc bay hơi. Khi các phân tử của chất lỏng chuyển sang pha khí, chúng rời khỏi pha chất lỏng với một lượng lực nhất định. Lượng lực này được gọi là áp suất hơi. Áp suất hơi phụ thuộc vào nhiệt độ của chất lỏng. Hãy nghĩ về một nồi nước đang được hâm nóng để chuẩn bị bữa tối. Nước bắt đầu lạnh và bạn không thấy hơi nước. Khi nhiệt độ của nước tăng lên, bạn bắt đầu thấy hơi nước nhiều hơn. Khi nhiệt độ của các phân tử nước tăng lên, các phân tử có thêm năng lượng động, cho phép chúng rời khỏi pha chất lỏng với áp suất và lực lượng nhiều hơn. Bạn có thể kết luận rằng khi nhiệt độ của một chất lỏng tăng lên, áp suất hơi cũng tăng lên. Đây là một mối quan hệ trực tiếp.
</Text>
<Text style={styles.title}>Điểm sôi</Text>
        <Text style={styles.content}>&emsp;Như đã đề cập trước đó, điểm sôi của nước là 100°C hoặc 373 K. Tại sao hiện tượng này xảy ra ở nhiệt độ này? Liệu nó luôn xảy ra ở nhiệt độ này không? Đúng là nước sẽ sôi ở 100°C hoặc 373 K miễn là áp suất khí quyển là 760 torr. Một nhiệt độ 100°C hoặc 373 K được gọi là điểm sôi bình thường của nước, nhiệt độ mà nước sẽ sôi khi áp suất khí quyển là 760 torr. Nhưng tại sao nước lại sôi ở nhiệt độ này? Khi nước được đun nóng đến 373 K, áp suất hơi của phân tử nước là 760 torr, áp suất hơi chính xác như áp suất khí quyển! Điều này giải đáp câu hỏi: Một chất lỏng sôi khi áp suất khí quyển bằng với áp suất hơi của chất lỏng.{'\n'}
        &emsp;Liệu nước luôn sôi ở 100°C không? Không, vì áp suất khí quyển có thể thay đổi. Nếu có một hệ thống áp suất thấp ở khu vực bạn sống, áp suất khí quyển thấp và nước sẽ sôi ở một nhiệt độ dưới 100°C do cần một nhiệt độ thấp hơn để đạt được áp suất hơi yêu cầu thấp hơn.

</Text>
<Text style={styles.mtitle1}>Hãy suy nghĩ về điều này:</Text>
        <Text style={styles.content}>&emsp;Bạn đã bao giờ nghe câu "Nồi sôi không bao giờ sôi chưa?" Chắc hẳn người đang theo dõi và đợi nồi sôi đang ở một khu vực có hệ thống áp suất cao. Trong tình huống này, cần một nhiệt độ cao hơn để làm cho nước sôi.


</Text>
<Text style={styles.title}>Chất rắn</Text>
        <Text style={styles.content}>&emsp;Chất rắn được đặc trưng bởi hình dạng và thể tích xác định của chúng. Các nguyên tử trong chất rắn có một kết cấu hình học cố định, cứng cáp và đều đặn. Những tính chất này phát sinh từ việc các nguyên tử trong chất rắn liên tục rung động, nhưng lại rung tại chỗ. Khi chất rắn được nung nóng đến nhiệt độ đủ cao, chúng có đủ năng lượng động học để trải qua quá trình nóng chảy và chuyển thành chất lỏng. Điểm nóng chảy của một chất rắn là nhiệt độ mà quá trình này xảy ra. Khi một chất lỏng chuyển thành chất rắn, quá trình này được gọi là đóng băng. Cần lưu ý rằng điểm nóng chảy và điểm đóng băng của một chất rắn có cùng nhiệt độ. Ví dụ, đá nóng chảy ở 273 K và nước đóng băng ở 273 K. Đây là lý do tại sao chất rắn và chất lỏng thường được liệt kê cùng nhau trong các biểu đồ biến đổi pha tiếp theo.

</Text>
<Text style={styles.title}>Sự thăng hoa và lắng đọng</Text>
        <Text style={styles.content}>&emsp;Làm thế nào mà khi bạn mua kem từ người bán trên một công viên vào một ngày hè nóng, tờ bao bọc kem không bị ướt bởi "đá" dùng để giữ lạnh? Liệu người bán có sử dụng đá không? "Đá khô" là thuật ngữ chỉ khí CO₂ ở dạng rắn. Đá khô có thể chuyển từ pha rắn trực tiếp sang pha khí mà không có trạng thái lỏng trung gian rõ ràng. Quá trình này được gọi là sự sublime. Một số chất khác cũng có thể sublime như bóng đèn cầu vồng (naftalen) và iodine rắn. Lắng có thể được hiểu là "ngược lại của" sublime. Trong quá trình này, một khí sẽ chuyển thành chất rắn, một lần nữa mà không có trạng thái lỏng trung gian rõ ràng.

</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    // Remove flexDirection: 'row'
  },
  content: {
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
    marginLeft: 20,
    textAlign: 'justify',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  mtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 20,
  },
  mtitle1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    maxWidth: 313, // Giới hạn chiều cao của tiêu đề
    overflow: 'hidden', // Ẩn bớt nếu vượt quá chiều cao giới hạn
    marginLeft: 20,
    marginTop: 10,
  },
  boximg: {
    alignItems: 'center'
  },
  image1: {
    width: 350,
    height: 350,
    resizeMode: 'cover',
  },
  image3: {
    width: '90%',
    resizeMode: 'contain',
  },
});
export default Khilytuong;
