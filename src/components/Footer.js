const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">946</span>
              </div>
              <div className="ml-3">
                <h3 className="text-xl font-bold">くしろまちづくり研究所</h3>
              </div>
            </div>
            <p className="text-gray-300">
              釧路の未来を一緒に描き、
              実現に向けて歩んでいきます。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">私たちの活動</h4>
            <ul className="space-y-2 text-gray-300">
              <li>地域活性化プロジェクト</li>
              <li>市民参加型ワークショップ</li>
              <li>政策提言・調査研究</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
            <div className="space-y-2 text-gray-300">
              <p>📞 0154-946-XXX</p>
              <p>✉️ info@946machiken.org</p>
              <p>📍 北海道釧路市</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 くしろまちづくり研究所. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
