---
title: Web Starter 00. Internet đang hoạt động như thế nào?
published: 2026-01-27
description: 'Mọi hacker đều cần phải biết về networking và cách mà internet đang hoạt động'
image: ''
tags: [web, networking, fundamentals]
category: 'network hacking/network fundamentals'
draft: false 
lang: 'vi'
---

> Đa số mọi người khi nhắc đến Internet thường nghĩ ngay đến website, google, facebook, trình duyệt và các URL. Nhưng web chỉ là một lát cắt rất mỏng của Internet. Internet luôn tồn tại ngay cả khi ngày mai web biến mất: Email, DNS, routing, file transfer, API, cloud infrastructure, ...

## 00. Internet là gì? 

+ Internet bản chất là một mạng của các mạng (a network of networks), nó hoạt động dựa trên một kỹ thuật được gọi là chuyển mạch gói (packet switching) và các giao thức được chuẩn hóa mà mọi máy tính đều có thể hiểu được.

+ Vậy một mạng (network) là gì? Một mạng là một nhóm các máy tính được liên kết với nhau để có thể trao đổi dữ liệu với nhau. Các máy trong một mạng được liên kết với nhau và các mạng trong internet cũng lại liên kết với nhau. Điều này cho phép một máy tính có thể trao đổi được với một máy tính trong mạng khác trên phạm vi toàn thế giới một cách nhanh chóng nhờ có internet.
  
+ Internet là một hệ thống các mạng phân tán mà không phụ thuộc vào bất kỳ một máy tính nào. Nó không có trung tâm điều khiển nào cả, các máy tính có thể tự do kết nối và ngắt kết nối tới internet mà không làm ảnh hưởng tới phần còn lại.

## 01. Kiến trúc phân tầng của Internet

+ Internet được thiết kế để sống sót, mở rộng, thay đổi liên tục. Ngay từ đầu, những người xây dựng Internet đã phải đối mặt với một bài toán rất thực tế: làm sao để hàng triệu hệ thống từ các tổ chức khác nhau, sử dụng phần cứng khác nhau vẫn có thể giao tiếp với nhau mà không cần tin tưởng nhau tuyệt đối. Và giải pháp của họ không phải là một hệ thống bảo mật phức tạp, mà là **kiến trúc phân tầng**.

+ Nếu không có kiến trúc phân tầng, mỗi hệ thống, ứng dụng trên internet sẽ phải tự xử lý mọi thứ từ truyền dữ liệu trên dây, định tuyến qua mạng, kiểm soát lỗi, quản lý kết nối, ... Điều này dẫn tới rất nhiều vấn đề trong một mạng internet vốn đã phức tạp. Kiến trúc phân tầng giải quyết vấn đề này bằng cách chia internet thành các tầng độc lập, mỗi tầng chỉ tập trung vào một nhóm nhiệm vụ cụ thể. Các tầng hoạt động độc lập, tầng trên sử dụng các dịch vụ của tầng dưới thông qua các điểm truy cập dịch vụ (Service Access Point - SAP) mà không cần quan tâm cách thức thực hiện của nó. Chính vì lý do đó mà kiến trúc phân tầng trở nên cực kì linh hoạt, cho phép dễ dàng bảo trì và nâng cấp một bộ phận mà không làm ảnh hưởng tới các bộ phận khác.

+ Mô hình OSI là mô hình tham chiếu tiêu chuẩn, một khung khái niệm do tổ chức ISO phát triển dựa trên kiến trúc phân tầng. Mô hình này chia các chức năng mạng thành 7 tầng (layer), mỗi tầng đảm nhận một chức năng riêng biệt, giúp đơn giản hóa, chuẩn hóa và tăng khả năng tương thích giữa các thiết bị, phần mềm và giao thức khác nhau mà không quan tâm đến cấu trúc công nghệ bên trong.

<img src="/images/web-starter_how-the-internet-works/osi-model.png" width=800>

+ Mô hình OSI có cấu trúc 7 tầng như đã nói:
  + Tầng 7: Tầng ứng dụng (Application Layer). Cung cấp các giao diện để các ứng dụng truy cập vào dịch vụ mạng: http, ftp, smtp, pop3, dns
  + Tầng 6: Tầng trình bày (Presentation Layer). Cho phép các ứng dụng biểu diễn dữ liệu, xử lý mã hóa và giải mã dữ liệu theo yêu cầu của các tầng
  + Tầng 5: Tầng phiên (Session Layer). Đồng bộ dữ liệu giữa các điểm đầu cuối dựa trên các phiên (session)
  + Tầng 4: Tầng giao vận (Transport Layer). Xử lý việc truyền-nhận dữ liệu cho các ứng dụng, đảm bảo các gói tin được truyền đến đúng thứ tự, không bị mất mát, bị lỗi hoặc có cơ chế phục hồi nếu được yêu cầu.
  + Tầng 3: Tầng mạng (Network Layer). Định tuyến, thực hiện chuyển tiếp gói tin từ nguồn tới đích trong cùng mạng hoặc khác mạng.
  + Tầng 2: Tầng liên kết dữ liệu (Data-Link Layer). Xây dựng liên kết trong cùng một mạng, truyền dữ liệu tin cậy giữa 2 thiết bị kết nối trực tiếp trong cùng mạng.
  + Tầng 1: Tầng Vật lý (Physical Layer). Chịu trách nhiệm truyền tải luồng bit thô (0 và 1) qua phương tiện truyền vật lý.

+ Mô hình OSI được xây dựng như một mô hình tham chiếu tiêu chuẩn, cung cấp các khái niệm trừu tượng cho phép mô tả, phân tích và so sánh các hệ thống truyền thông phức tạp theo cùng một ngôn ngữ chung. Giá trị cốt lõi của mô hình này nằm ở cách tư duy về hệ thống, nó chia nhỏ quá trình truyền thông thành các tầng độc lập, mỗi tầng đảm nhận một nhóm chức năng rõ ràng, giúp cho việc nghiên cứu, phát triển và mở rộng các mô hình khác trở nên khả thi. 

+ Mô hình TCP/IP triển khai thực tế trên internet được xây dựng từ việc áp dụng chính tư duy phân tầng, kế thừa trực tiếp ý tưởng cốt lõi của mô hình OSI.

## 02. Mô hình TCP/IP

<img src="/images/web-starter_how-the-internet-works/osi_tcp-ip.png" width=800>

+ Mô hình TCP/IP hay còn gọi là mô hình Internet, là mô hình được sử dụng rộng rãi trên hầu hết các hệ thống mạng. 

<img src="/images/web-starter_how-the-internet-works/tcp-ip-implementation.png" width=800> 

+ Trong triển khai kiến trúc mô hình TCP/IP trên thực tế, các nút mạng đầu cuối (PC, server, smartphone) thường được triển khai toàn bộ các tầng trong khi các nút mạng trung gian (các thiết bị chuyển tiếp dữ liệu như Hub, switch, router) thường chỉ được triển khai một số tầng phía dưới. 

+ Như đã nói, kiến trúc phân tầng của mô hình TCP/IP được thiết kế để đạt được sự linh hoạt, để một ứng dụng có thể giao tiếp qua mạng với một ứng dụng khác trên một thiết bị khác bất kể sự phức tạp của ứng dụng hay các hệ thống. Để đảm bảo điều này, ta cần phải có một tập các tiêu chuẩn, quy tắc về khuôn dạng, ngữ nghĩa mà các thông điệp được xử lý trên các tầng và các hành vi khi trao đổi các thông điệp giữa các tầng đồng cấp. Vậy là `các giao thức mạng (network protocol)` được ra đời. Rất nhiều công nghệ được triển khai theo nhiều cách trên các nút mạng (phần cứng từ những nhà sản xuất khác nhau, hệ điều hành khác nhau, các ứng dụng cũng khác nhau), và chúng luôn thay đổi. Nhưng tất cả chúng đều có thể nói chuyện được với nhau vì chúng sử dụng chung giao thức.

+ Trong mỗi tầng trong mô hình TCP/IP lại có các chức năng khác nhau, cách xử lý thông điệp khác nhau dẫn đến sinh ra các giao thức khác nhau. Các tầng đồng cấp ở mỗi bên sử dụng cùng giao thức để điều khiển quá trình truyền thông logic, trong khi dữ liệu được đóng gói tuần tự truyền xuống qua các tầng bên gửi rồi xử lý ngược lại ở bên nhận hình thành một tập có thứ tự các giao thức được sử dụng gọi là `chồng giao thức (protocol stack)` .

<img src="/images/web-starter_how-the-internet-works/tcp-ip-protocol-stack.png" width=300 style="display: block; margin: auto;">

+ Chồng giao thức TCP/IP có dạng đồng hồ cát với việc sử dụng duy nhất một giao thức liên mạng là `IP - Internet Protocol` cho phép một hệ thống mạng mới sử dụng công nghệ truyền dẫn bất kỳ kết nối đến hệ thống mạng hiện tại, tách rời phát triển ứng dụng ở tầng cao với công nghệ truyền dẫn ở tầng thấp.

+ Trong mô hình TCP/IP, dữ liệu được truyền từ ứng dụng này sang ứng dụng khác thông qua 2 cơ chế gọi là `cơ chế đóng gói (encapsulation)` và `cơ chế tháo gói (decapsulation)`. 
  + Ở phía người gửi, dữ liệu tạo ra tại tầng ứng dụng và lần lượt chuyển xuống các tầng thấp hơn trong protocol stack. Và tại mỗi tầng, dữ liệu tầng trên được xem như `payload` sau đó được tầng hiện tại bổ sung thêm các thông tin điều khiển vào `header`. Kết quả là một đơn vị dữ liệu mới được tạo ra mang đầy đủ thông tin cần thiết để xử lý ở tầng tương ứng phía người nhận.
  + Ở phía người nhận quá trình này diễn ra theo chiều ngược lại gọi là tháo gói. Trong đó dữ liệu nhận được đi từ tầng dưới lên tầng trên. Tại mỗi tầng sẽ lần lượt đọc và xử lý phần header tương ứng của tầng đó, sau đó tiến hành loại bỏ phần header đó rồi chuyển tiếp payload lên tầng trên. 

<img src="/images/web-starter_how-the-internet-works/encapsulation-decapsulation.png" width=800>

## 03. Internet định danh mọi thứ thế nào?

+ Trước tiên, định danh chính là giá trị cho phép xác định một người hay một đối tượng cụ thể (tên, địa chỉ, số điện thoại, email, ...). Các định danh cũng có tính phân cấp, cho phép quản lý một các logic và hiệu quả các đối tượng trong một không gian xác định. Điều tương tự cũng xảy ra trong các hệ thống mạng, các đối tượng (dịch vụ, máy tính, thiết bị mạng) cũng được gán cho một giá trị định danh riêng để phân biệt lẫn nhau.
+ Trong mô hình TCP/IP, mỗi tầng lại có một nhiệm vụ khác nhau để điều khiển việc truyền thông tin giữa những đối tượng khác nhau nên cần có các cơ chế định danh khác nhau, không có một định danh nào hoàn hảo để có thể sử dụng xuyên suốt trên tất cả các tầng cả. Do đó mà một đối tượng có thể mang nhiều định danh, khi đó có thể cần một cơ chế "phân giải" để tìm kiếm một định danh của đối tượng này khi biết định danh của đối tượng đó ở tầng khác (ta sẽ nói thêm về phần này về sau).

<img src="/images/web-starter_how-the-internet-works/network-identifier.png" width=600>

+ Địa chỉ vật lý hay địa chỉ MAC được sử dụng trong tầng liên kết dữ liệu, là một định danh dành cho phần cứng, một chuỗi 48-bit gắn liền với card mạng (network interface card) và được sử dụng trong phạm vi mạng cục bộ (local network). Tham khảo thêm tại [đây](https://www.geeksforgeeks.org/computer-networks/mac-address-in-computer-network/?ysclid=mkzrwtjqey305363109)

<img src="/images/web-starter_how-the-internet-works/ipconfig-mac-address.png" width=800>

<img src="/images/web-starter_how-the-internet-works/ifconfig-mac-address.png" width=800>

+ Địa chỉ IP là định danh dùng để định tuyến trên tầng mạng trong giao thức IP (Internet Protocol). Địa chỉ IP được gán cho mỗi card mạng, có tính duy nhất trong mạng và phụ thuộc vào từng mạng có thể được gán địa chỉ IP khác nhau. Trong bài viết này tôi sẽ đề cập tới phiên bản IPv4, phiên bản được sử dụng phổ biến nhất hiện nay (anh em có thể tìm hiểu thêm về phiên bản IPv6 tại [đây](https://www.geeksforgeeks.org/computer-networks/what-is-ipv6/)).
  + IPv4 là không gian định danh 32-bit, biểu diễn bằng 4 octet (4 nhóm 8 bit), mỗi octet được viết dưới dạng thập phân có giá trị từ (0-255), ví dụ 192.168.1.1, 10.0.0.1, 0.0.0.0, 255.255.255.255, ...
  + Một địa chỉ IP bao gồm 2 phần: hostID (xác định thiết bị cụ thể trong mạng) và networkID (xác định mạng mà thiết bị đó thuộc về). Ranh giới giữa 2 phần này được xác định bởi mặt nạ mạng (network mask) và việc chia tách này chính là nền tảng của subnetting, cho phép tổ chức không gian IP một cách linh hoạt và có kiểm soát. Anh em tham khảo thêm tại [đây](https://www.geeksforgeeks.org/computer-networks/introduction-to-subnetting/?ysclid=ml1ub1nx11129694163)
  + Một điều quan trọng cần chú ý là chỉ có khoảng 4.3 tỷ (2^32) địa chỉ IPv4, con số này không đủ cho thế giới hiện đại với hàng tỷ người và hàng chục tỷ thiết bị. Và để giải quyết vấn đề này, Internet sử dụng một cơ chế tách biệt giữa `định danh toàn cầu (public IP)` và `định danh cục bộ (private IP)`.
    + Private IP là định danh trong phạm vi mạng cục bộ, không được định tuyến trên Internet, các địa chỉ này được tái sử dụng ở vô số mạng khác nhau miễn là chúng không trực tiếp giao tiếp với nhau qua Internet. 

        <img src="/images/web-starter_how-the-internet-works/private-ip-address-space.png" width=800>

    + Public IP là các địa chỉ có tính duy nhất trên toàn Internet, có thể được định tuyến qua các router toàn cầu và đại diện cho một **điểm hiện diện** công khai trên Internet.
    + Và để các thiết bị dùng private IP có thể giao tiếp với nhau qua Internet, một giao thức mới được tạo ra: `NAT - Network Address Translation`. NAT giúp chuyển tiếp từ các địa chỉ private IP sang một địa chỉ public IP để rồi được định tuyến tới mạng đích. Và mạng nội bộ mặc định được che giấu khi bên ngoài lúc này chỉ nhìn thấy có gói tin được gửi từ public IP tới mà thôi.

        <img src="/images/web-starter_how-the-internet-works/working-of-nat.png" width=800>

  + Khi định tuyến một gói tin qua các mạng khác nhau, các router sẽ chỉ quan tâm tới địa chỉ IP mà không cần biết địa chỉ MAC từ xa, địa chỉ MAC chỉ có ý nghĩa trong mạng cục bộ và sẽ bị thay đổi sau mỗi lần gói tin đi qua một router. Tuy nhiên khi gói tin tới mạng đích, vấn đề đặt ra không còn là định tuyến liên mạng nữa mà là **xác định chính xác thiết bị đích trong mạng nội bộ**. Lúc này hệ thống cần một cơ chế để ánh xạ địa chỉ IP sang địa chỉ MAC vật lý tương ứng. Cơ chế đó chính là `ARP (Address Resolution Protocol)`. Nó cho phép một thiết bị trong mạng cục bộ gửi yêu cầu broadcast hỏi `IP này thuộc về MAC nào?` và chỉ có thiết bị nào giữ địa chỉ IP được yêu cầu sẽ phản hồi lại, từ đó mà gói tin được xử lý và gửi tới đích chính xác. Nhưng thiết kế này hoàn toàn dựa trên cơ sở sự trung thực của các thiết bị trong một môi trường đáng tin cậy, một môi trường không bị tấn công. Điều này dẫn đến một điểm yếu là `gói tin ARP có thể bị giả mạo`: ARP spoofing, ARP poisoning, ... (ta sẽ đề cập vấn đề này trong các bài viết sau). 

+ Số hiệu cổng: Địa chỉ IP chỉ định danh cho một máy, nhưng trong một máy có hàng trăm ứng dụng mạng cùng hoạt động, port number (một giá trị 16-bit từ 0-65535) giải quyết bài toán này ở tầng giao vận bằng cách xác định tiến trình hoặc dịch vụ cụ thể để gán cho một số hiệu cổng, kết hợp cùng với IP để tạo thành một socket, cho phép người gửi dữ liệu xác định chính xác ứng dụng nào trên máy đích sẽ nhận dữ liệu này.  

+ Tên miền (domain name) là định danh được sử dụng trên tầng ứng dụng, nó là một chuỗi ký tự gợi nhớ cho người dùng khi truy cập các dịch vụ trên tầng ứng dụng. Con người không làm việc trực tiếp với IP address bởi vì chúng không thân thiện, tên miền được tạo ra với ý nghĩa là lớp định danh logic, ánh xạ trực tiếp sang địa chỉ IP thông qua một hệ thống DNS (Domain Name System).
    + Domain Name System là hệ thống tên miền gồm các máy chủ quản lý thông tin tên miền và cung cấp dịch vụ DNS. 
    + Việc tách rời tên miền và địa chỉ IP cũng mang lại tính linh hoạt rất lớn cho Internet: một tên miền có thể trỏ tới nhiều IP (`load balancing`). Địa chỉ IP có thể thay đổi mà không ảnh hưởng tới người dùng, và hạ tầng phía sau có thể được mở rộng hoặc di chuyển một cách trong suốt.  
    + Vậy làm thế nào để phân giải tên miền sang địa chỉ IP? Ta sẽ tìm hiểu vấn đề này ở các bài viết sau. 
    
    <img src="/images/web-starter_how-the-internet-works/dns-resolution-example.png" width=800>

## 04. IP - TCP - UDP

+ Trong toàn bộ kiến trúc Internet, IP và TCP là hai giao thức cốt lõi đến mức mô hình vận hành của Internet được đặt tên trực tiếp theo chúng: `TCP/IP`. Điều này không phải ngẫu nhiên, mà phản ánh đúng triết lý thiết kế ban đầu của Internet: tách biệt rõ ràng giữa định tuyến gói tin và truyền dữ liệu end-to-end.

+ IP (Internet Protocol) hoạt động trên tầng liên mạng, chịu trách nhiệm cho việc đánh địa chỉ và định tuyến gói tin trên Internet. Nó định nghĩa cách một gói dữ liệu được gắn địa chỉ nguồn, địa chỉ đích và được chuyển tiếp qua nhiều mạng trung gian khác nhau để tới đúng mạng đích. IP là một giao thức hướng không liên kết, không tin cậy, truyền dữ liệu theo phương thức `best-effort`, chỉ quan tâm tới tốc độ và cũng không có cơ chế phục hồi nếu lỗi. Nhưng khi cần, ứng dụng sẽ sử dụng dịch vụ tầng trên để đảm bảo độ tin cậy (TCP)

+ TCP (Transmission Control Protocol) hoạt động trên tầng giao vận, là giao thực đảm nhiệm việc truyền dữ liệu end-to-end giữa các tiến trình một cách tin cậy. Nó là giao thức hướng liên kết, yêu cầu thiết lập liên kết bằng quá trình bắt tay ba bước (3-way handshake). Nó đảm bảo độ tin cậy của gói tin bằng các cơ chế báo nhận và truyền lại, cơ chế kiểm soát luồng, cơ chế kiểm soát tắc nghẽn. TCP bổ sung những gì mà IP còn thiếu là độ tin cậy, nhờ TCP mà các ứng dụng có thể làm việc trên Internet như thể đang đọc và ghi trên một luồng dữ liệu liên tục, bất chấp việc bên dưới là một hạ tầng mạng không ổn định và không đáng tin cậy.

    <img src="/images/web-starter_how-the-internet-works/three-way-handshake.png" width=800>

+ Bên cạnh TCP, UDP (User Datagram Protocol) cũng là một giao thức quan trọng ở tầng giao vận. UDP không cung cấp cơ chế kết nối hay đảm bảo độ tin cậy, mà chỉ đóng vai trò là một lớp “bọc mỏng” trên IP để phân phối dữ liệu tới đúng ứng dụng thông qua port number. UDP tồn tại để phục vụ những trường hợp mà độ trễ và hiệu năng quan trọng hơn độ tin cậy (ví dụ dịch vụ livestream, dịch vụ DNS, ...), hoặc khi ứng dụng tự xây dựng cơ chế kiểm soát của riêng mình ở tầng trên


## 05. Tổng kết

Như vậy, tôi đã trình bày tổng quan về cách internet đang hoạt động, tạo nền tảng kiến thức cần thiết để anh em tiếp tục học tập và khai thác trong lĩnh vực hacking một cách bài bản và có chiều sâu. 

--\
vnth4nhnt
