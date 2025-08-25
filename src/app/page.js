'use client';

import React, { useState } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Users, Target, Heart, ArrowRight, Menu, X } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-400 rounded-full animate-bounce delay-150"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-400 rounded-full animate-pulse delay-300"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-6">
            <p className="text-lg text-gray-600 mb-2">一般社団法人</p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              わくわくする
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                くしろ
              </span>
              の未来をつくる
            </h1>
            <p className="text-xl text-blue-600 font-medium">Kushiro Community Development Institute</p>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            くしろに関わる内外の人が楽しく交流することを通じて、<br />
            くしろのまちづくりと人づくりを進めていきます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 font-medium flex items-center justify-center shadow-lg">
              私たちについて <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 font-medium shadow-lg">
              お問い合わせ
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">研究所の概要</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            釧路及び周辺地域は、引き続く人口減少により今後さらに活力を失うことが懸念されています。<br />
            一方、冷涼な夏の気候によって、釧路は10年連続で北海道で最も長期滞在者が訪れるエリアとなり、<br />
            年々増えて2,000名を超える規模となっています。
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">設立の目的</h3>
          <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
            多くの滞在者は単なる観光消費にとどまらずもっと地域と積極的に交流したいと考えています。<br />
            当団体は、そのような滞在者を地域の人々とつなぐことで地域の課題解決を図ることを目的として、<br />
            自身20年に渡り釧路を訪れている医療法人理事長のバックアップを得て<strong>2020年年末</strong>に設立されました。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">経済活性</h3>
            <p className="text-gray-600 text-sm">
              滞在者の持つ知見や外からの目線を提供してもらうことで、地域の未活用資源を用いた新たな商品の開発やモニターとしての意見提供
            </p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">環境改善</h3>
            <p className="text-gray-600 text-sm">
              自然環境やまちの景観などの保全や改良へのサポート、にぎわい創出のイベントへの参加・協力など、滞在環境をより楽しめるものにする活動
            </p>
          </div>

          <div className="group text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">人材育成</h3>
            <p className="text-gray-600 text-sm">
              大学講師など専門知識を用いた講座の実施や、豊富な職業経験の地元中高生への提供など、地域の未来人材に向けた活動
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Activities = () => {
  const activities = [
    {
      title: "優れた交流場所の提供",
      description: "長期滞在者と地元の人々、あるいは長期滞在者同士が打ち解けて会話でき地域の課題を認識・理解できるように、食事をゆったりととれるためのスペースを用意します。",
      icon: "🏠"
    },
    {
      title: "地域課題の発掘・整理",
      description: "釧路及び周辺地域で長期滞在者が関心を持ち主体的に関われるような多様な課題を掘り起こして理解しやすいように整理を行います。",
      icon: "🔍"
    },
    {
      title: "取り組み課題の適合・調整",
      description: "長期滞在者が滞在期間で時間をかけ、また繰り返し訪れて継続的に課題解決に取り組めるように、人的なネットワーク含め様々な点から支援をしていきます。",
      icon: "🤝"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">活動方針</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            長期滞在者の方に地域への関心を持っていただき、具体的な課題解決に取り組んでいただけるよう、<br />
            当団体は次の3つの活動を実施していきます。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{activity.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{activity.title}</h3>
              <p className="text-gray-600 leading-relaxed">{activity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ActivityHistory = () => {
  const [currentActivity, setCurrentActivity] = useState(0);
  
  const activityHistory = [
    {
      id: 1,
      date: "2024年8月",
      title: "夏の交流イベント開催",
      description: "長期滞在者と地域住民による交流BBQイベントを開催。約50名が参加し、地域課題について活発な意見交換が行われました。",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300", 
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      link: "#"
    },
    {
      id: 2,
      date: "2024年7月",
      title: "地域資源活用ワークショップ",
      description: "釧路の未活用資源を活用した新商品開発に向けたワークショップを実施。地元事業者と滞在者が協力してアイデア創出を行いました。",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      link: "#"
    },
    {
      id: 3,
      date: "2024年6月",
      title: "環境保全活動",
      description: "釧路湿原の清掃活動を実施。滞在者と地域の方々が協力して美しい自然環境の保全に取り組みました。",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      link: "#"
    },
    {
      id: 4,
      date: "2024年5月",
      title: "中高生向けキャリア講座",
      description: "多様な職業経験を持つ滞在者による、地元中高生向けのキャリア教育講座を開催。将来の可能性について語り合いました。",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      link: "#"
    },
    {
      id: 5,
      date: "2024年4月",
      title: "研究所設立記念シンポジウム",
      description: "地域づくりの専門家を招いたシンポジウムを開催。今後の活動方針と地域課題解決に向けた取り組みについて議論しました。",
      images: [
        "/api/placeholder/400/300",
        "/api/placeholder/400/300"
      ],
      link: "#"
    }
  ];

  const scrollToImage = (activityIndex, imageIndex) => {
    const container = document.getElementById(`slider-${activityIndex}`);
    if (container) {
      const imageWidth = container.children[0].offsetWidth + 12; // 12px for gap
      container.scrollTo({
        left: imageIndex * imageWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">活動実績</h2>
          <p className="text-lg text-gray-600">
            これまでの活動内容をご紹介します
          </p>
        </div>

        <div className="space-y-12">
          {activityHistory.map((activity, index) => (
            <div key={activity.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="lg:flex">
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {activity.date}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{activity.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{activity.description}</p>
                  <a 
                    href={activity.link}
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 text-white px-6 py-3 rounded-full hover:from-blue-700 hover:to-green-700 transition-all transform hover:scale-105 font-medium shadow-lg"
                  >
                    詳細を見る <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </div>
                
                <div className="lg:w-1/2 p-8">
                  <div className="relative">
                    <div 
                      id={`slider-${index}`}
                      className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {activity.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="flex-shrink-0 w-48 h-32">
                          <img 
                            src={image} 
                            alt={`${activity.title} ${imgIndex + 1}`}
                            className="w-full h-full object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                            onClick={() => scrollToImage(index, imgIndex)}
                          />
                        </div>
                      ))}
                    </div>
                    
                    {activity.images.length > 1 && (
                      <div className="flex justify-center mt-4 space-x-2">
                        {activity.images.map((_, imgIndex) => (
                          <button
                            key={imgIndex}
                            onClick={() => scrollToImage(index, imgIndex)}
                            className="w-2 h-2 rounded-full bg-gray-300 hover:bg-blue-500 transition-colors"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Members = () => {
  const members = [
    {
      name: "渡辺 栄重",
      nameEn: "わたなべ　さかえ",
      role: "代表理事",
      description: "阿寒町出身。司会・プロデュース業シーズサービス（株）代表取締役。「いつも明るく一生懸命」がモットー。",
      avatar: "渡"
    },
    {
      name: "小林 真",
      nameEn: "こばやし　まこと",
      role: "理事/研究所長",
      description: "釧路市城山出身。日本IBM公共事業部門主席コンサルタント。定年退職後、市内にてインバウンド向けのゲストハウス事業を立ち上げ。",
      avatar: "小"
    },
    {
      name: "功刀 融",
      nameEn: "くぬぎ　とおる",
      role: "理事",
      description: "山梨県医療法人回生堂病院理事長。2000年より釧路にリピート滞在。",
      avatar: "功"
    },
    {
      name: "田辺 貴久",
      nameEn: "たなべ　たかひさ",
      role: "理事",
      description: "釧路市ビジネスサポートセンター k-Biz 副センター長。リクルート出身でSUUMOジャーナルを立ち上げ。",
      avatar: "田"
    },
    {
      name: "小野瀬 孝典",
      nameEn: "おのせ　たかのり",
      role: "監事",
      description: "標津町出身。野付漁業協同組合に20年勤務し退職後、標津警備社水産部門を立ち上げ。",
      avatar: "小"
    }
  ];

  return (
    <section id="members" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">メンバーご紹介</h2>
          <p className="text-lg text-gray-600">
            多様な専門性を持つメンバーが、チーム一丸となってサポートします
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-xl">{member.avatar}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.nameEn}</p>
                  <p className="text-blue-600 font-medium text-sm">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    alert('お問い合わせありがとうございます！24時間以内にご返信いたします。');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-green-400 rounded-full animate-bounce"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">お問い合わせ</h2>
          <p className="text-lg text-gray-600">
            まちづくりに関するご相談、お気軽にお声がけください
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">活動拠点・連絡先</h3>
            <p className="text-gray-600 mb-8">
              初回相談は無料です。釧路の課題や想いをお聞かせください。
              一緒に解決策を考えましょう。
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">活動拠点</p>
                  <p className="text-gray-600">〒085-0018<br />北海道釧路市黒金町13丁目23−4<br />功刀ビル（旧そとくぼビル）</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">メールでのお問い合わせ</p>
                  <p className="text-gray-600">info@946machiken.org</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">電話でのお問い合わせ</p>
                  <p className="text-gray-600">090-5076-1127</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-xl">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="yamada@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 *
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none transition-all"
                  placeholder="ご相談内容をお聞かせください..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 font-medium shadow-lg"
              >
                送信する
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Activities />
      <ActivityHistory />
      <Members />
      <Contact />
      <Footer />
    </div>
  );
}
