Penjelasan
==========

Direktori ini berisi source code dan berbagai file-file lain yang diperlukan. Direktori **data** adalah direktori tempat basis data mongoDB meletakkan datanya (pada implementasinya, ini sebenarnya bebas diletakkan dimana saja). Lihat pada bab 6, kemudian aktifkan server mongoDB dan akses menggunakan client.

Mengaktifkan server
-------------------

> $ ls -la 
> total ..
> drwxr-xr-x 4 bpdp users  4096 Dec 15 11:00 .
> drwxr-xr-x 8 bpdp users  4096 Dec 13 21:31 ..
> ...
> ...
> ...
> drwxr-xr-x 2 bpdp users  4096 Dec 12 08:05 data
> ...
> ...
> ...
> $ mongod --dbpath ./data --rest

Mengaktifkan client
-------------------

Dari direktori mana saja:

> $ mongo

Setelah itu, silahkan kerjakan sesuai dengan bab 6. Setelah selesai mengerjakan, jangan dihapus karena masih digunakan pada pembahasan ExpressJS + mongoDB.

Penutup
-------

Basis data tidak dimasukkan ke repo karena ukurannya yang cukup besar:

> $ ls data/
> total 65548
> drwxr-xr-x 2 bpdp users     4096 Dec 12 08:05 .
> drwxr-xr-x 4 bpdp users     4096 Dec 15 11:00 ..
> -rwxr-xr-x 1 bpdp users        0 Dec 12 12:41 mongod.lock
> -rw------- 1 bpdp users 16777216 Dec 11 23:20 mydb.0
> -rw------- 1 bpdp users 33554432 Dec 11 22:04 mydb.1
> -rw------- 1 bpdp users 16777216 Dec 11 23:20 mydb.ns

