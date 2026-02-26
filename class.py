# eng=lambda a,b :f"{a} katta"if a>b else("teng" if a==b else f"{b} katta") 
# print(eng(10,20))
# def soni_sanash(son):
#     if son==0:
#         return 0
#     return son%10 + soni_sanash(son//10)
# print(soni_sanash(4141))

# sonlar=0
# def sonlar_yigindisi(son):
#     if son==0:
#         return 0
#     return  son%10 + sonlar_yigindisi(son//10)

# from soz import sozlar
# import random
# tasodifiy_soz=random.choice(list(sozlar))
# print(tasodifiy_soz)
# while True:
#     word=input("so'zlar:")
#     print(sozlar.get(word ,"buday soz yoq"))
#     play=input('yana oynashsizmi ')
#     if play=="yo'q" or play=="no":
#         print("biznig tarjima dasturdan foydalanganigiz uchun raxmat")
#         break
# 13
# class Kitob:
#     def __init__(self,nomi,mualifi,sahifa,yil):
#         self.nom=nomi
#         self.mualif=mualifi
#         self.sahifa=sahifa
#         self.yil=yil
#     def ktb_nomi_mualifi(self):
#         return f"kiton nomi {self.nom}\nuning mualifilari {self.mualif}"
#     def kitob_sahifalari(self):
#         return f"kitobning sahifasi {self.sahifa}"
#     def kitob_yil(self):
#         return f"kitob ishlab chiqarilgan yili {self.yil}"
#     def info(self):
#         return f"kitob nomi kiton nomi {self.nom}\nuning mualifilari {self.mualif}\nkitobning sahifasi {self.sahifa}\nkitob ishlab chiqarilgan yili {self.yil}"
# alovuddin=Kitob("alovuddin","xalq og‘zaki ijodi",150,1712)
# print(alovuddin.info())

# import os
# os.mkdir("yoqubboy")
# os.rmdir("yoqubboy")
# print(os.listdir())  
# f=open("kerak/test.txt","r")
# matn=f.read()
# print(matn)
# f.close()

# f=open("kerak/test.txt","r")
# for qator in f:
#     print(qator)
# f.close()

# f=open("kerak/test.txt","W")
# matn=input("matn kiriting=")
# f.write(matn)
# f.close()

# a=open("kerak/test.txt","r")
# oqish=a.read()
# print(oqish)

# with open("test.txt","r") as matn:
#     print(matn.read())

# with open("test.txt","a") as f:
#     f.write("\n YAngi")

# import json
# data={"ism":"Ali","yosh":25}
# with open("data.json","w") as matn:
#     json.dump(data,matn)

# with open("data.json","r") as m:
#     datat=json.load(m)
# print(datat)

# lugat={
#     "book":"kitob",
#     "pen":"ruchka"
# }
# try:
#     print(lugat["book"])
# except KeyError:
#     print("bunday kalit soz yoq")

# import math
# m=input("son kiriting=")
# m=math.gcd(20,15)
# print(m)


# class Avto:
#     def __init__(self,yili,model,rang,narx,prabek):
#         self.yili=yili
#         self.model=model
#         self.rang=rang
#         self.narx=narx
#         self.prabek=prabek
#     def get_info(self):
#         return f"mashina-{self.model}\nmashina rangi-{self.rang}\nmashina ishlab chiqarilgan yili-{self.yili}\nmashina yurgan yo'li-{self.prabek}\nmashina narxi-{self.narx}"
#     def get_narx(self):
#         if self.yili>=5:
#             m=self.narx-15000
#         else:
#             m=self.narx-5000
#         return f"mashnia sotilish narxi:{m}"
#     def get_color(self,color,yil):
#         if yil>=5:
#             m=self.narx-15252
#             if 49>= color >=1:
#                self.narx=self.narx-self.narx*color*2/100
#                return f"Bu mashina narxi :{self.narx}"
#             else:
#                 c=self.narx-87921
#                 return f"Bu mashina narxi:{c},Undan ko'ra metall sifatida sotsangiz ko'proq pul olasiz ! ! !"
#         else:
#             return f"Bu narxi :{self.narx}"
        
# Damas=Avto(2029,"Damas","yashil",96000,35000)
# print(Damas.get_color(40,8))


# class Asosiy:
#     def __init__(self,mahsulot_nomi,mahsulot_narxi,mahsulot_turi):
#         self.name=mahsulot_nomi
#         self.price=mahsulot_narxi
#         self.turi=mahsulot_turi
#     def get_info(self):
#         return f"Mahsulot nomi: {self.name}\nMahsulot narxi: {self.price}\nMahsulot turi: {self.turi}"
# class Sut_Mahsulotlari(Asosiy):
#     def __init__(self, mahsulot_nomi, mahsulot_narxi, mahsulot_turi,litr):
#         super().__init__(mahsulot_nomi, mahsulot_narxi, mahsulot_turi)
#         self.lt=litr
#     def sut_info(self):
#         return f"{self.get_info()} {self.lt} litr bor"
# class Baliq(Asosiy):
#     def __init__(self, mahsulot_nomi, mahsulot_narxi, mahsulot_turi,kg):
#         super().__init__(mahsulot_nomi, mahsulot_narxi, mahsulot_turi)
#         self.kg=kg
#     def get_mega(self):
#         return f"{self.get_info()} {self.kg} klogramm bor"
# sut=Sut_Mahsulotlari("Halimaxon Sut",15000,"Sut",150)
# Balik=Baliq("Baliq",35000,"Baliq va Baliq mahsulotlari",1000)
# print(sut.sut_info())
# print(Balik.get_mega())



# class Ota:
#     def __init__(self,ism,yosh):
#         self.name=ism
#         self.age=yosh
#     def get_info(self):
#         return f"Ismi :{self.name}\nYoshi :{self.age}"
# class Bola(Ota):
#     def __init__(self, ism, yosh,maktab):
#         super().__init__(ism, yosh)
#         self.maktab=maktab
#     def bola_info(self):
#         return f"{self.get_info()}\nMaktabi :{self.maktab}"
# class Yosh_bola(Ota):
#     def __init__(self, ism, yosh,boqcha):
#         super().__init__(ism, yosh)
#         self.boqcha=boqcha
#     def yosh_bola(self):
#         return f"{self.get_info()}\nBoqchasi :{self.boqcha}"

# class Talaba(Ota):
#     def __init__(self, ism, yosh,universitit):
#         super().__init__(ism, yosh)
#         self.universitit=universitit
#     def talaba_info(self):
#         return f"{self.get_info()}\nTalaba universitit :{self.universitit}"
# talaba1=Talaba("Botir",20,"TATU")
# boqcha1=Yosh_bola("Sarvar",4,"hususiy boqcha")
# bola1=Bola("ULug'bek",15,"20-maktab")
# print(bola1.bola_info())
# print(talaba1.talaba_info())
# print(boqcha1.yosh_bola())
# 3
# class Hayvon:
#     def __init__(self,nomi,ovozi,narx,yosh):
#         self.nomi=nomi
#         self.ovoz=ovozi
#         self.narx=narx
#         self.yosh=yosh
#     def get_info(self):
#         return f"Hayvoning nomi :{self.nomi}\nHayvoning ovozi:{self.ovoz}\nHayvoning narxi :{self.narx}\nHayvon yoshi :{self.yosh}"
# class it_uchun(Hayvon):
#     def __init__(self, nomi, ovozi, narx, yosh,zot):
#         super().__init__(nomi, ovozi, narx, yosh)
#         self.zot=zot
#     def it_info(self):
#         return f"{self.get_info()}\nHayvonning zot:{self.zot}"
# class mushuk_uchun(Hayvon):
#     def __init__(self, nomi, ovozi, narx, yosh,):
#         super().__init__(nomi, ovozi, narx, yosh)
#         # self.
#     def mushuk_info(self):
#         return f"{self.get_info()}\n"
# hayvon1=it_uchun("moynoq","vov",250000,4,"abchalka")
# print(hayvon1.it_info())


# 4
# 4
# class Avto:
#     def __init__(self,model,narxi,yili):
#         self.madel=model
#         self.narx=narxi
#         self.yil=yili
#     def Avto_info(self):
#         return f"Mashina modeli:{self.madel}\nMashina narxi:{self.narx}so'm\nMashina yili:{self.yil}"
# class Avto1(Avto):
#     def __init__(self, model, narxi, yili,yurgani,holati):
#         super().__init__(model, narxi, yili)
#         self.yurgani=yurgani
#         self.holati=holati
#     def avto1_info(self):
#         return f"{self.Avto_info}\nMashina yurgani:{self.yurgani}\nMashina holati:{self.holati}"
# avto1=Avto1("Damas",95000000,2005,"950 000km","yaxshi" )
# print(avto1.avto1_info())
# 5
# class Talaba:
#     def __init__(self,ism,yosh):
#         self.ism=ism
#         self.yosh=yosh
#     def get_info(self):
#         return f"Talaba ismi:{self.ism}\nTalaba yosh:{self.yosh}"
# class bakalavr(Talaba):
#     def __init__(self, ism, yosh, kursi):
#         super().__init__(ism, yosh)
#         self.kurs=kursi
#     def bakalvr_info(self):
#         return f"{self.get_info()}\nTalaba kursi:{self.kurs}\n"
# class magistr(Talaba):
#     def __init__(self, ism, yosh):
#         super().__init__(ism, yosh)
#     def magistr_info(self):
#         return f"{self.get_info()}"
    
# talaba1=bakalavr("Ulug'bek",20,2)
# talaba2=bakalavr("Yoqubboy",20,2)
# print(talaba1.bakalvr_info())
# print(talaba2.bakalvr_info())
# 6
# class Ustoz:
#     def __init__(self,ism,yosh,fan):
#         self.name=ism
#         self.age=yosh
#         self.fan=fan
#     def teacher_info(self):
#         return f"Ustoz ismi:{self.name}\nUstoz yoshi:{self.age}\nUstoz darsi:{self.fan}"
# class informatika(Ustoz):
#     def __init__(self, ism, yosh, fan,dasturlash):
#         super().__init__(ism, yosh, fan)
#         self.dastur=dasturlash
#     def infor_info(self):
#         return f"{self.teacher_info()}\nUstoz biladi {self.dastur} dasturlash tillarini"
# ustoz1=informatika("Ustoz",25,"informatika","python,java,json,html,css")
# print(ustoz1.infor_info())
# 7
# class Texnika:
#     def __init__(self,nomi,garantiya,narxi):
#         self.nomi=nomi
#         self.garant=garantiya
#         self.price=narxi
#     def texnika(self):
#         return f"Texnika nomi:{self.nomi}\nTexnika garantiya yili :{self.garant}\nTexnika narxi :{self.price} $"
# class kamputer(Texnika):
#     def __init__(self, nomi, garantiya, narxi,ekron,keys,klavitura):
#         super().__init__(nomi, garantiya, narxi)
#         self.ekran=ekron
#         self.keys=keys
#         self.klvatra=klavitura
#     def kamputerlar(self):
#         return f"{self.texnika()}\nEkran duyumi{self.ekran}\nKampyuter keysi bor/yo'q :{self.keys}\nKlavitura {self.klvatra}"
# kampyuter=kamputer("HP","3 yil",500,15.6,"yo'q","yonadi")
# print(kampyuter.kamputerlar())
# 9
# class Shaxs:
#     def __init__(self,ism,yosh):
#             self.ism=ism
#             self.yosh=yosh
#     def shaxs_info(self):
#         return f"Shaxsning nomi {self.ism}\nShaxs yoshi {self.yosh}"
# class Oqituvchi(Shaxs):
#     def __init__(self, ism, yosh,fani):
#          super().__init__(ism, yosh)
#          self.fan=fani
#     def oqituvchi(self):
#         return f"{self.shaxs_info()}\nQaysi fandan dars berishi {self.fan}"
# Oqituvchilar=Oqituvchi("Ustoz",25,"Informatika")
# print(Oqituvchilar.oqituvchi())
# 10
# class Mashina:
#     def __init__(self,model,yli,narxi):
#         self.model=model
#         self.yili=yli
#         self.narx=narxi
#     def mashina(self):
#         return f"Mashina madeli :{self.model}\nMashina yili :{self.yili}\nMashina narxi :{self.narx}"
# class Yuk_mashinasi(Mashina):
#     def __init__(self, model, yli, narxi,yuk_kotarish,qrani):
#         super().__init__(model, yli, narxi)
#         self.yuk=yuk_kotarish
#         self.kotarilishi=qrani
#     def load_car(self):
#         return f"{self.mashina()}\nMashina yuk ko'tarishi {self.yuk} tona\ndanqirati :{self.kotarilishi}"
# yuk_mashina=Yuk_mashinasi("Gm",2009,'280000 $',8,"Bor")
# print(yuk_mashina.load_car())
# 11
# class Uchuvchi:
#     def __init__(self,ism,yosh,darajasi):
#         self.name=ism
#         self.age=yosh
#         self.degree=darajasi
#     def uchuv(self):
#         return f"Uchuvchi Ismi :{self.name}\nUchuvchi yoshi :{self.age}\nUchuvchi darajasi :{self.degree}"
# class Harbiy(Uchuvchi):
#     def __init__(self, ism, yosh, darajasi,necha_teror):
#         super().__init__(ism, yosh, darajasi)
#         self.nechta_teror_oldirgani=necha_teror
#     def harbiy_uchuvchi(self):
#         return f"{self.uchuv()}\nUchuvi nechta teroris oldirgani {self.nechta_teror_oldirgani}"
# uchuvchi=Harbiy("Anvar",31,"2-darajali uchuvchi",49)
# print(uchuvchi.harbiy_uchuvchi())
# 12
# class Kitob:
#     def __init__(self,nomi,varaqa,chop_etilgan_sana,mualif):
#         self.nomi=nomi
#         self.varaqa=varaqa
#         self.printt=chop_etilgan_sana
#         selfmualif=mualif
#     def book_info(self):
#         return f"Kitob nomi :{self.nomi}\nKitob varaqalar soni :{self.varaqa}\nKitob nashir etib boshlangan yili :{self.printt}\nKitob mu'alifi :{self.mualif}"
# class Darslik(Kitob):
#     def __init__(self, nomi, varaqa, chop_etilgan_sana,fan,malumot_yil):
#         super().__init__(nomi, varaqa, chop_etilgan_sana)
#         self.fan=fan
#         self.malumot=malumot_yil
#     def darslik(self):
#         return f"{self.book_info()}\nKitob ushbu fanga tegishli :{self.fan}\nKitobdagi ma'lumotlar {self.malumot} yilga tegishli\n"


# kitob2=Darslik("INK-TXN",250,2024,"Informatika",'2022-2023')
# print(kitob2.darslik())
# kitob1=Kitob("Mening birinchi kitobim",250,2024)
# print(kitob1.book_info())
# 13
# class Hayvon:
#     def __init__(self , nomi):
#         self.nomi = nomi
        
#     def info(self):
#         return f"{self.nomi} turli xil ovoz chiqaradi"

# class Mushuk(Hayvon):
#     def __init__(self, nomi, mushuk):
#         super().__init__(nomi)
#         self.mushuk = mushuk
#     def info_cat(self):
#         return f"{self.info()}\nMushukning ovozi : {self.mushuk}"
# class It(Hayvon):
#     def __init__(self, nomi,It):
#         super().__init__(nomi)
#         self.kuchuk=It
#     def dog_info(self):
#         return f"{self.info()}\nKuchukning ovozi :{self.kuchuk}"
# hayvon1=Mushuk("Malavoy","mimu-mimu")
# print(hayvon1.info_cat())
# 14
# class Qurulma:
#     def __init__(self,nomi,batereykasi,zaryadlash,xotira,ekran_olchami):
#         self.nomi=nomi
#         self.amper=batereykasi
#         self.zaryad=zaryadlash
#         self.xotirasi=xotira
#         self.dy=ekran_olchami
#     def info(self):
#         return f"Qurulma nomi :{self.nomi} "
    
# class Telefon(Qurulma):
#     def __init__(self, nomi, batereykasi, zaryadlash, xotira, ekran_olchami):
#         super().__init__(nomi, batereykasi, zaryadlash, xotira, ekran_olchami)

#     def Phone_info(self):
#         return f"{self.info()}\nQurulma baraterkasi necha soati yetishi :{self.amper}\nQurulma zaryadi 0 dan 100 % gacha to'lishi :{self.zaryad}\nQurulma xotrasi :{self.xotirasi} gb\nQurulma ekran olchami :{self.dy}"

# class Noutbuk(Qurulma):
#     def __init__(self, nomi, batereykasi, zaryadlash, xotira, ekran_olchami,ekran_necha_gr_burulishi):
#         super().__init__(nomi, batereykasi, zaryadlash, xotira, ekran_olchami)
#         self.gr=ekran_necha_gr_burulishi
        
#     def Noutbuk_info(self):
#          return f"{self.info()}\nQurulma baraterkasi necha soati yetishi :{self.amper}\nQurulma zaryadi 0 dan 100 % gacha to'lishi :{self.zaryad}\nQurulma xotrasi :{self.xotirasi} gb\nQurulma ekran olchami :{self.dy}\nQurulma ekran burulish gradusi :{self.gr}"

# Telefon1=Telefon("Samsung A6",3000,"3 soat",32,"200-400")
# print(Telefon1.Phone_info())
 15
# class Kompaniya:
#     def __init__(self,oylik,ish_vaqti,mahsuloti):
#         self.oylik=oylik
#         self.ish_vaqti=ish_vaqti
#         self.mahsuloti=mahsuloti
#     def info(self):
#         return f"Ishchilar ortacha oyliki :{self.oylik}\nIshchilar ish vaqti :{self.ish_vaqti}\nIshchilar ishlab chiqaradigan mahsulot :{self.mahsuloti}"
# class Ishchi(Kompaniya):
#     def __init__(self, oylik, ish_vaqti, mahsuloti,oylik_kotarish):
#         super().__init__(oylik, ish_vaqti, mahsuloti)
#         self.oylik_kotarish=oylik_kotarish
#     def ishchilar(self):
#         return f"{self.info()}\nIshchi oyliki kotarilishi :{self.oylik_kotarish}"
# ishchi1=Kompaniya(120,"8:45 Dan 19:00 gacha","Gugurt\n")
# ishchi2=Ishchi(120,"8:45 Dan 19:00 gacha","Gugurt","Bir yildan kegin 5% oshishi")
# print(ishchi1.info())
# print(ishchi2.ishchilar())
# 16
# class  shaxs:
#     def __init__(self,ism,yoshi,pul_ishlatishi):
#         self.ism=ism
#         self.yosh=yoshi
#         self.pul=pul_ishlatishi
#     def info(self):
#         return f"Shaxs nomi :{self.ism}\nShaxs yoshi :{self.yosh}\nShaxs haftasiga pul sarfi :{self.pul}"
# class Oquvchi(shaxs):
#     def __init__(self, ism, yoshi, pul_ishlatishi,sinf,fan):
#         super().__init__(ism, yoshi, pul_ishlatishi)
#         self.sinf=sinf
#         self.fan=fan
#     def oquvchi_info(self):
#         return f"{self.info()}\nShaxs qaysi sinfda oqishi :{self.sinf}\nShaxs qaysi fani yaxshi oqishi :{self.fan}"
# oquvchi1=Oquvchi("nodir",15,"55 000 so'm","9-A","Informatika va matematika")
# print(oquvchi1.oquvchi_info())

# 17
# class Trasport:
#     def __init__(self,tezlik,yoqilgi,nomi):
#         self.tezlik=tezlik
#         self.yoqilgi=yoqilgi
#         self.nomi=nomi
#     def info(self):
#         return f"Transport nomi :{self.nomi}\nTrasmport tezliki :{self.tezlik}\nTrasport ishlatadigan yoqilgi turi :{self.yoqilgi}"
# class Avtobus(Trasport):
#     def __init__(self, tezlik, yoqilgi, nomi,orindiq):
#         super().__init__(tezlik, yoqilgi, nomi)
#         self.orindi=orindiq
#     def avtobus_info(self):
#         return f"{self.info()}\nTransport orindiqlar soni :{self.orindi}"
# class Poyezd(Trasport):
#     def __init__(self, tezlik, yoqilgi, nomi,vogonlar):
#         super().__init__(tezlik, yoqilgi, nomi)
#         self.vagon=vogonlar
#     def poyezd_info(self):
#         return f"{self.info()}\nPoyezed vagonlar :{self.vagon}"
# poyezd1=Poyezd(350,"biliman","poyezd",20)
# avtobus=Avtobus(80,'AI90',"Avtobus",20)
# print(avtobus.avtobus_info())
# print(poyezd1.poyezd_info())

# 18
# class Shaxs:
#     def __init__(self,ism,yoshi):
#         self.ism=ism
#         self.yoshi=yoshi
#     def info(self):
#         return f"Shaxsning ismi :{self.ism}\nShaxs yoshi :{self.yoshi}"
# class Talaba(Shaxs):
#     def __init__(self, ism, yoshi,kursi):
#         super().__init__(ism, yoshi)
#         self.kursi=kursi
#     def Talaba_info(self):
#         return f"{self.info()}\nTalaba :{self.kursi}-kurs\n"
# class Oqituvchi(Shaxs):
#     def __init__(self, ism, yoshi,darslar,fani):
#         super().__init__(ism, yoshi)
#         self.fanlar=darslar
#         self.fani=fani
#     def Oqituvchi_info(self):
#         return f"{self.info()}\nO'qituvchi necha soat dars berishi:{self.fanlar}\nO'qituvchi dars beradigan fani :{self.fani}"
# talaba=Talaba("Botir",20,3)
# oqituvchi=Oqituvchi("Mardon",35,"35","Kimyo")
# print(talaba.Talaba_info())
# print(oqituvchi.Oqituvchi_info())

# 19
# class Mahsulot:
#     def __init__(self,nomi,ishlab,narx):
#         self.nomi=nomi
#         self.ishlab=ishlab
#         self.narxi=narx
#     def mahsulot_info(self):
#         return f"Mahsulot nomi :{self.nomi}\nMahsulot ishlab chiqarilgan joy:{self.ishlab}\nMahsulot narxi :{self.narxi}"
# class Meva(Mahsulot):
#     def __init__(self, nomi, ishlab,narxi,kg):
#         super().__init__(nomi, ishlab,narxi)
#         self.kg=kg
#     def meva_info(self):
#         return f"{self.mahsulot_info()}\nBu mevadan {self.kg} kg bor"
# meva1=Meva("Banan","chet el",20000,20)
# mahsulot1=Mahsulot("kuluch","texnik",10000)
# print(mahsulot1.mahsulot_info())
# print(meva1.meva_info())

# 20
# class Bino:
#     def __init__(self,qavat,qachon):
#         self.qavat=qavat
#         self.yil=qachon
#     def Bino_info(self):
#         return f"Bino necha qavat :{self.qavat}\nBino qachon qurulgani :{self.yil}"
# class Uy(Bino):
#     def __init__(self, qavat, qachon,hona,necha_kishi):
#         super().__init__(qavat, qachon)
#         self.xona=hona
#         self.kishi=necha_kishi
#     def uy_info(self):
#         return f"{self.Bino_info()}\nUyda necha xona borligi :{self.xona}\nUyda {self.kishi} kishi yashaydi"
# bino1=Bino(8,2019)
# uy=Uy(1,2009,5,3)
# print(uy.uy_info())
# print(bino1.Bino_info())
    

# 20
# class Bino:
#     def __init__(self,qavat,qachon):
#         self.qavat=qavat
#         self.yil=qachon
#     def Bino_info(self):
#         return f"Bino necha qavat :{self.qavat}\nBino qachon qurulgani :{self.yil}"
# class Uy(Bino):
#     def __init__(self, qavat, qachon,hona,necha_kishi):
#         super().__init__(qavat, qachon)
#         self.xona=hona
#         self.kishi=necha_kishi
#     def uy_info(self):
#         return f"{self.Bino_info()}\nUyda necha xona borligi :{self.xona}\nUyda {self.kishi} kishi yashaydi"
# bino1=Bino(8,2019)
# uy=Uy(1,2009,5,3)
# print(uy.uy_info())
# print(bino1.Bino_info())
# 21
# class Shaxs:
#     def __init__(self,ism,yosh):
#         self.ism=ism
#         self.yosh=yosh
#     def info(self):
#         return f"shaxsning ismi :{self.ism}\nshaxsning yoshi :{self.yosh}"
# class Ishchi(Shaxs):
#     def __init__(self, ism, yosh,oyligi,ishi):
#         super().__init__(ism, yosh)
#         self.oyligi=oyligi
#         self.ishi=ishi
#     def ishchi_info(self):
#         return f"{self.info()}\nShaxs ish joyi :{self.ishi}\nShaxsning oyligi :{self.oyligi} so'm\n"
# ishchi1=Ishchi("Botir",30,5000000,"acfa")
# shaxs=Shaxs("botir",15)
# print(ishchi1.ishchi_info())
# print(shaxs.info())

# 22
# class Kitob:
#     def __init__(self,sahifa,mualif,narxi):
#         self.sahifa=sahifa
#         self.muallif=mualif
#         self.narxi=narxi
#     def info(self):
#         return f"Kitob muallifi :{self.muallif}\nKitob sahifalar soni :{self.sahifa}\nBu kitob narxi :{self.narxi}"
# class Elektron_kitob(Kitob):
#     def __init__(self, sahifa, mualif, narxi,web):
#         super().__init__(sahifa, mualif, narxi)
#         self.web=web
#     def elektron_kitob(self):
#         return f"{self.info()}\nUshbu kitob {self.web} saytidan olingan\nBu kitob narxi :{self.narxi}\n"
# kitob=Kitob(250,"men",15000)
# kitob2=Elektron_kitob(250,"men",5000,"Kitoblar olami")
# print(kitob2.elektron_kitob())
# print(kitob.info())

# 23
# class Mashina:
#     def __init__(self,rang,model,narxi):
#         self.rang=rang
#         self.model=model
#         self.narx=narxi
#     def info(self):
#         return f"Mashina modeli :{self.model}\nMashina rangi :{self.rang}\nMashina narxi :{self.narx} $"
# class Elektr_avto(Mashina):
#     def __init__(self, rang, model, narxi,bater_km):
#         super().__init__(rang, model, narxi)
#         self.baterka_km=bater_km
#     def _info(self):
#         return f"{self.info()}\nMashina baterekasi 100% da {self.baterka_km} km yuradi\n"
# elektr_avto=Elektr_avto("qora","Mers",75000,69800)
# mashina=Mashina("sariq","matiz",5000)
# print(elektr_avto._info())
# print(mashina.info())

# 24
# class Kitob:
#     def __init__(self,nomi,beti,sana,mualif):
#         self.sahifa=beti
#         self.sana=sana
#         self.nomi=nomi
#         self.mualif=mualif
#     def info(self):
#         return f"Kitob nomi :{self.nomi}\nkitob bosilib chiqishi :{self.sana}\nKitob mualifi :{self.mualif}"
# class kitob(Kitob):
#     def __init__(self, nomi, beti, sana, mualif):
#         super().__init__(nomi, beti, sana, mualif)
#     def info(self):
#         return f"Kitob mualifi :{self.mualif}\nKitob nomi :{self.nomi}\nkitob bosilib chiqishi :{self.sana}\n"
# kitob2=kitob("bir kun",200,2009,"biliman")
# print(kitob2.info())
# Kitob1=Kitob("bir kun",200,2009,"biliman")
# print(Kitob1.info())
# 26
#class Maktab:
#    def __init__(self,oquvchilar,ustozlar,mk_nomi):
#        self.oquvchilar=oquvchilar
#        self.ustozlar=ustozlar
#        self.maktab_nomi=mk_nomi
#    def info(self):
#        return f"Maktab nomi :{self.maktab_nomi}\n/Maktab ustozlar soni :{self.ustozlar}\nMaktabdagi Oquvchilar soni :{self.oquvchilar}"
#class sinf(Maktab):
#    def __init__(self, oquvchilar, ustozlar, mk_nomi,xona_raqam,sinf_shiori):
#        super().__init__(oquvchilar, ustozlar, mk_nomi)
#        self.xona=xona_raqam
#        self.shior=sinf_shiori
#        self.royhat=[
#            "Ali Karimov","Bekzod Tursunov",
#            "Diyorbek Rahmonov","Jasur Alimuhamedov","Sardor Qodirov",
#            "Azizbek Islomov","Shohruh Ergashev","Muhammadali Sobirov",
#            "Ziyodulla Xolmatov","Kamronbek Yo‘ldoshev","Madina Karimova",
#            "Dilnoza Tursunova","Mohira Rahmonova","Aziza Alimuhamedova",
#            "Shaxnoza Qodirova","Sevara Islomova","Nilufar Ergasheva",
#            "Maftuna Sobirova","Rayhona Xolmatova","Zuhra Yo‘ldosheva"
#        ]
#    def sinf_info(self):
#        return f"{self.info()}\nSinf xonadagi o'quvchilar ism familyalari :{self.royhat}\nSinf shiori :{self.shior}"
#sinf1=sinf(20,"palankaslar","15-mkatba",205,"izlan va olg'a bor")
#print(sinf1)
#mk=Maktab(1000,"palankaslar","19-maktab")
#print(mk)

# 27
# class Avto:
#     def __init__(self,model,color,price):
#         self.model=model
#         self.color=color
#         self.price=price
        
#     def oddiy_car(self):
#         return f"Avtomobil nomi :{self.model}\n{self.model} rangi {self.color}\n{self.model} narxi {self.price} $"
    
# class Mercedes(Avto):
#     def __init__(self, model, color, price,akimyator):
#         super().__init__(model, color, price)
#         self.bateraka_km=akimyator
        
#     def merc(self):
#         return f"{self.oddiy_car()}\n{self.model} bateraka(100% da) {self.bateraka_km} km ga yetadi\n"
    
# class Chevrolet(Avto):
#     def __init__(self, model, color, price,zavod):
#         super().__init__(model, color, price)
#         self.zavod=zavod

#     def chevr(self):
#         return f"{self.oddiy_car()}\n{self.model}-{self.zavod} devlatda ishlab chiqadi\n"
    
# merc1=Mercedes('Amg63',"oq",120000,10_000)
# print(merc1.merc())
# chevr1=Chevrolet("Chevrolet","qora",10000,16)
# print()
# avto1=Avto('Damas',"yashil",9000)
# print(avto1.oddiy_car())

# 28

# class Texnika:
#     def __init__(self,nomi,narx):
#         self.name=nomi
#         self.price=narx
#     def info(self):
#         return f"Texnika nomi :{self.name}\n{self.name} ning narxi :{self.price}"

# class Printer(Texnika):
#     def __init__(self, nomi, narx,necha_xil):
#         super().__init__(nomi, narx)
#         self.rang=necha_xil
#     def  printer(self):
#         return f"{self.info}\n{self.name} {self.rang} da chiqara oladi"

# class Skaner(Texnika):
#     def __init__(self, nomi, narx,):
#         super().__init__(nomi, narx)          ustozdan sorash


# 29

# class Sportchi:
#     def __init__(self,ismi,yoshi,yutuq,sport_turi):
#         self.name=ismi
#         self.age=yoshi
#         self.yutuqlari=yutuq
#         self.sport_turi=sport_turi
#     def _info(self):
#         return f"sportchi ismi :{self.name}\n{self.name} yoshi :{self.age}\n{self.name} oynaydigan sport turi :{self.sport_turi}\n{self.name}ning yutuqlari :{self.yutuqlari}"
# sprotchi1=Sportchi("yoqubboy",16,"yoq","tennis")
# print(sprotchi1._info())
# class Fudbolchi(Sportchi):
#     def __init__(self, ismi, yoshi, qubuki, sport_turi,Gol_soni,asosiy_oynaydi):
#         super().__init__(ismi, yoshi, qubuki, sport_turi)
#         self.Gol_soni=Gol_soni
#         self.asosiy_oynaydigan=asosiy_oynaydi
#     def fudbalist(self):
#         return f"{self._info()}\n{self.name} urgan gollari :{self.Gol_soni}\n{self.name} asosiy oynaydigan joyi :{self.asosiy_oynaydigan}"
# fudbolchi1=Fudbolchi("Valijon",16,5,"fudbol",10,"senter")
# print(fudbolchi1.fudbalist())

# 30

# class Student:
#     def __init__(self,ismi,yoshi):
#         self.name=ismi
#         self.age=yoshi
#     def info(self):
#         return f"Student {self.name}\n{self.age}"
# class Talaba(Student):
#     def __init__(self, ismi, yoshi,data):
#         super().__init__(ismi, yoshi)
#         self.data=data
#     def __info(self):
#         return f"{self.info()}\n{self.name} tug'ilgan {self.data}"

# 31
# class Qurulma:
#     def __init__(self,nomi,narx):
#         self.narx=narx
#         self.nomi=nomi
#     def info(self):
#         return f"Qurulma nomi :{self.nomi}\n{self.nomi} ning narxi :{self.narx} so'm"
    
# class Telefon(Qurulma):
#     def __init__(self, nomi, narx,batereykasi,xotira,camerasi):
#         super().__init__(nomi, narx)
#         self.bater=batereykasi
#         self.xt=xotira
#         self.cm=camerasi
#     def tel_info(self):   
#         return f"{self.info()}\n{self.nomi} telefoni {self.bater} Amper \n{self.nomi} telefoni xotirasi {self.xt} gb(yoki Terabeyt) \n{self.nomi} telefon camerasi {self.cm} mega px\n"
# tel1=Telefon("A36",2500000,5000,128,38)
# print(tel1.tel_info())
# qurulma1=Qurulma("gugurt",5000)
# print(qurulma1.info())
#  32
# class Inson:
#     def __init__(self,ism,yosh):
#         self.name=ism
#         self.age=yosh
#     def info(self):
#         return f"Insoning ismi :{self.name}\n{self.name} ning yoshi :{self.age}"   
    
# class Student(Inson):
#     def __init__(self, ism, yosh,yonalishi,spendiya):
#         super().__init__(ism, yosh)
#         self.yonaslish=yonalishi
#         self.spendiya=spendiya
#     def student_info(self):
#         return f"{self.info()}\n{self.name} ning yonalishi :{self.yonaslish}\n{self.name} ning spendiya puli {self.spendiya}"
    
# 34
# class Texnika:
#     def __init__(self,nomi,garantiya,narxi):
#         self.nomi=nomi
#         self.garant=garantiya
#         self.price=narxi
#     def texnika(self):
#         return f"Texnika nomi:{self.nomi}\n{self.nomi} garantiya :{self.garant} yili\n{self.nomi} narxi :{self.price} $"
# class Telefon(Texnika):
#     def __init__(self, nomi, garantiya, narxi,ekron,camerasi):
#         super().__init__(nomi, garantiya, narxi)
#         self.ekran=ekron
#         self.camera=camerasi
#     def telefonlar(self):
#         return f"{self.texnika()}\nEkran duyumi{self.ekran}\n{self.nomi} ning camerasi {self.camera} mega px"
# telefon=Telefon("A6",1,500000,"246-495",11)
# print(telefon.telefonlar())
# 35
# class Hayvon:
#     def __init__(self,nomi,yosh,narx):
#         self.nomi=nomi
#         self.yosh=yosh
#         self.narx=narx
    
#     def info(self):
#         return f"Hayvon nomi {self.nomi}\n{self.nomi} uni yoshi {self.yosh}\n{self.nomi} narxi :{self.narx}"
# class Mushuk(Hayvon):
#     def __init__(self, nomi, yosh, narx,ism):
#         super().__init__(nomi, yosh, narx)
#         self.laqab=ism
#     def mushuk_info(self):    
#         return f"{self.info()}\nMUshukning ismi :{self.laqab}\n"
# class Baliq(Hayvon):
#     def __init__(self, nomi, yosh, narx,turi,yashash_joy):
#         super().__init__(nomi, yosh, narx)
#         self.turi=turi
#         self.yashash=yashash_joy
#     def baliq(self):
#         return f"{self.info()}\nBaliq turi :{self.turi}\nBaliq yashaydigan joyi :{self.yashash}"
# mushuk1=Mushuk("mushuk",5,500,"kalta")
# print(mushuk1.mushuk_info())
# baliqlar=Baliq("Sazon",2,25000,"qilchiqsiz","xonaki")
# print(baliqlar.baliq())
    
# 36
# class Kampaniya:
#     def __init__(self,nomi,oylik,ish_vaqt):
#         self.kampaniya_nomi=nomi
#         self.oylik=oylik
#         self.ish_vaqt=ish_vaqt
    
#     def kampaniya(self):
#         return f"Kampaniya nomi :{self.kampaniya_nomi}\nKampaniya ortacha oylik :{self.oylik}\nKampaniya ish vaqti :{self.ish_vaqt}"

# class IT_kampaniya(Kampaniya):
#     def __init__(self, nomi, oylik, ish_vaqt,oquvchilar):
#         super().__init__(nomi, oylik, ish_vaqt)
#         self.oquvchilar=oquvchilar
    
#     def it_kampaniya(self):
#         return f"{self.kampaniya()}\nITda oqiydigan oquvchilar soni :{self.oquvchilar}"
# it_kampaniya1=IT_kampaniya("IT_park",500,"8.00-20.00")    
# print(it_kampaniya1.it_kampaniya())

# 37
# class Mahsulot:
#     def init(self,nomi,narxi):
#         self.name=nomi
#         self.price=narxi
#     def info(self):
#         return f"Mahsulot nomi :{self.name}\n{self.name} ning narxi :{self.price} so‘m"
# mahsulot1=Mahsulot("Qamera",350000)
# print(mahsulot1.info())
# class Ichimlik(Mahsulot):
#     def init(self, nomi, narxi,shakar):
#         super().init(nomi, narxi)
#         self.shakar=shakar
#     def ichimlik(self):
#         return f"{self.info()}\n{self.name} ga {self.shakar} gr shakar qoshilgan"
# ichimlik1=Ichimlik("Coca-cola",11000,100)
# print(ichimlik1.ichimlik())
        
# 38
# class Uskuna:
#     def init(self,nomi,narxi):
#         self.name=nomi
#         self.price=narxi
#     def Uskuna_info(self):
#         return f"Mahsulot nomi :{self.name}\n{self.name} ning narxi :{self.price} so‘m"
# uskuna1=Uskuna("Klaviatura",99000)
# print(uskuna1.Uskuna_info())
# class Tv(Uskuna):
#     def init(self, nomi, narxi,ekrani,garant,tok):
#         super().init(nomi, narxi)
#         self.ekran=ekrani
#         self.garantiya=garant
#         self.tok=tok
#     def televizor(self):
#         return f"{self.Uskuna_info()}\n{self.name} ning ekran olchami :{self.ekran} dyuym\n{self.name} ning garantiya {self.garantiya}-yil\n{self.name} 1-soatda {self.tok} ishlatadi."
# tw=Tv("Smart TV",3500000,42,3,"90–120 Vt")
# print(tw.televizor())

# 39
# class Avto:
#     def init(self, model, yil, narx):
#         self.model = model
#         self.yil = yil
#         self.narx = narx
#     def Avto_info(self):
#         return f"Avtomobil modeli :{self.model}\nIshlab chiqarilgan sanasi :{self.yil}\n{self.model} ning narxi :{self.narx}"

# class Elektromobil(Avto):
#     def init(self, model, yil, narx,batereya_hajmi):
#         super().init(model, yil, narx)
#         self.batareya=batereya_hajmi
#     def Elektrmobillar(self):
#         return f"{self.Avto_info()}\n{self.model} ning batareyka hajmi :{self.batareya} km yetadi"
# tesla = Elektromobil("Tesla",2023, 50000, 1000)
# print(tesla.Elektrmobillar())

# 40
# class Maktab:
#     def int(self,name):
#         self.name=name
        
#     def mk_info(self):
#         return f"Maktab nomi :{self.name}"
#     class Shaxs:
#         def init(self,ism,yosh):
#             self.ism=ism
#             self.yosh=yosh
#         def SHaxs(self):
#             return f"Shaxsning ismi :{self.ism}\n{self.ism} ning yoshi :{self.yosh}"
#     class Talaba(Shaxs):
#         def init(self, ism, yosh,spendiya,kurs):
#             super().init(ism, yosh)
#             self.talaba_royhat=[]
#             self.spendiya=spendiya
#             self.kurs=kurs
#         def talaba_info(self):
#             return f"{self.SHaxs}\n{self.ism}, {self.kurs} kursda oqiydi \n{self.ism} ning spendiya puli :{self.spendiya} so‘m"
#         def add_talaba(self,ism,yosh):
#             self.talaba_royhat.append(ism,yosh)
#         def show_talaba(self):
#             return {self.talaba_royhat}

# 41
# class Inson:
#     def __init__(self,ism,yosh,tel):
#         self.name=ism
#         self.age=yosh
#         self.tel=tel
#     def info(self):
#         return f"Inson ismi :{self.name}\n{self.name} ning yoshi :{self.age}\n{self.name}ning telefon raqami :{self.tel}"
# inson1=Inson("Vali",15,"+998974561213")
# print(inson1.info())
# class Shifokor(Inson):
#     def __init__(self, ism, yosh, tel,oyligi,ishi):
#         super().__init__(ism, yosh, tel)
#         self.oyligi=oyligi
#         self.ishi=ishi
#     def shifokorlar(self):
#         return f"{self.info()}\n{self.name}ning oyligi :{self.oyligi}\n{self.name} Shifoxonada {self.ishi} bo'lib ishlaydi"

# doktor=Shifokor("Yoqubboy",35,"+998971201515",500,"Urolog ")
# print(doktor.shifokorlar())

# 42
# class Kitob:
#     def __init__(self,kitob_nomi,mualif,narx):
#         self.nomi=kitob_nomi
#         self.mualif=mualif
#         self.narx=narx
#     def kitob_info(self):
#         return f"Kitob nomi :{self.nomi}\n{self.nomi}ning mualifi :{self.mualif}\n{self.nomi}ning narxi :{self.narx} so'm"
# class Audio(Kitob):
#     def __init__(self, kitob_nomi, mualif, narx,ovoz_bergan,audio_vaqti):
#         super().__init__(kitob_nomi, mualif, narx)
#         self.ovoz=ovoz_bergan
#         self.audio_vaqt=audio_vaqti
#     def Audoi_kitob(self):
#         return f"{self.kitob_info()}\n{self.nomi}-ga ovoz bergan odam :{self.ovoz}\n{self.nomi} ning audio vaqti :{self.audio_vaqt}\n"
# kitob1=Kitob("Qizil Qalpoqcha","Charles Perrault",55000)
# audio1=Audio("Qizil Qalpoqcha","Charles Perrault",5000,"Anne Hathaway","45-daqiqa")
# print(audio1.Audoi_kitob())
# print(kitob1.kitob_info())

# 43
# class Qurulma:
#     def __init__(self,nomi,narxi):
#         self.nomi=nomi
#         self.narxi=narxi
#     def info(self):
#         return f"Qurulma nomi :{self.nomi}\n{self.nomi}ning narxi :{self.narxi}"
# class SmartWatch(Qurulma):
#     def __init__(self, nomi, narxi,zaryad,sim):
#         super().__init__(nomi, narxi)
#         self.zaryad=zaryad
#         self.simkard=sim
#     def smartwatch(self):
#         return f"{self.info()}\nSmartWatch :{self.zaryad} Saotga yetadi\nSmartWatch SimKarta  Bor/Yo'q :{self.simkard}"
# qurulma1=Qurulma("Telefon","5000000")
# print(qurulma1.info())
  





























































































































































































































































































































































































































































































































# import time
# import random

# viruses = ["Trojan.exe", "HackTool.py", "Virus123.dll"]

# print("Scanning system...")
# time.sleep(2)

# for v in viruses:
#     print(f"Threat detected: {v}")
#     time.sleep(1)

# print("😱 3 threats found!")
# time.sleep(2)

# print("Relax 😄 This is a prank!")







