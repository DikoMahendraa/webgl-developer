Hi Perkenalkan Aku Diko dan ini adalah perjalankan menjadi seorang WebGL Developer.

berikut ini adalah hal hal yg aku pelajari, mulai dari fundamental sampai ke hal yg advanced (seperti membuat animasi 3D, interaksi dan juga penggunaan framework ThreeJS).

mari kita mulai dari hal yg paling dasar yaitu:

1. Berkenalan dengan Canvas

- canvas merupakan element HTML yg memungkinkan kita untuk membuat sebuah bentuk 2D menggunakan code/script (javascript). canvas sendiri bukan sebuah gambar statis melainkan sebuah element / area kerja, yg didalamnya kita bisa membuat grafik, animasi, dan juga gambar secara dinamis.

- sebenarnya canvas ini mirip seperti tag <img> hanya saja dia lebih clean karena hanya memiliki 2 attribute yaitu height & width. tidak seperti img yg memiliki attribute src dan juga alt. attribute height dan width pada canvas bersifat optional yg artinya kita tidak perlu mengisi nilai tersebut, namun by default canvas akan memberikan wide = 300px dan height = 150px.

- attribute id merupakan global HTML attributes yg artinya bisa dipakai di element apapun pada HTML termasuk canvas, dan penggunaan id pada canvas sangat direkomendasikan karena akan sangat membantu untuk kita mengidentifikasikan element tersebut. sama seperti tag <img> kita bisa mengatur styling dari element canvas seperti (margin, border, background, ...), namun perlu diperhatikan bahwa efek dari styling tersebut hanya berlaku untuk element canvas atau area kerja, bukan isi dari konten yg ada didalam canvas. dan 1 lagi jika tidak membuat styling untuk canvas maka by default canvas akan menampilkan background transprarent.

- accessible content pada canvas, sama seperti <img>, <video>, dsbnya. canvas juga memiliki fitur untuk memberitahu users, jika canvas tidak support pada suatu browser dengan cara menyedikan fallback text yg akan dimunculkan jika medianya ga bisa ke load atau dimunculin. bisa dibilang mirip dengan attribute alt pada img. cara bikinnya cukup mudah cukup memasukan kontennya kedalam tag <canvas>fallback kamu</canvas> seperti ini. perlu di ingat bahwa ketika kita menyediakan fallback maka kita wajib menambahkan closing tag pada canvas (</canvas>) jika tidak maka fallback tidak akan pernah dimunculkan.

untuk lebih lanjut bisa pelajari code yg ada pada folder week-1/day-1.js
