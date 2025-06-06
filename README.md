# React Router v6 基礎学習プロジェクト

このプロジェクトは、React Router v6 を使用した基本的なルーティングの実装例です。

## 機能概要

このアプリケーションには以下の 2 つのページが実装されています：

1. **ホームページ** (`/`)

   - 「Home ページです」というメッセージを表示
   - 「About へ移動」ボタンで About ページへ遷移

2. **About ページ** (`/about`)
   - 「About ページです」というメッセージを表示
   - 「Home へ戻る」ボタンでホームページへ遷移

## 技術スタック

- React 18
- TypeScript
- React Router v6

## プロジェクト構造

```
router-basic/
├── src/
│   ├── pages/
│   │   ├── HomePage.tsx  // ホームページコンポーネント
│   │   └── AboutPage.tsx // Aboutページコンポーネント
│   ├── App.tsx          // ルーティング設定
│   └── ...
└── ...
```

## セットアップ方法

1. 依存パッケージのインストール:

```bash
npm install
```

2. 開発サーバーの起動:

```bash
npm start
```

アプリケーションは http://localhost:3000 で起動します。

## 実装の特徴

1. **React Router v6 の使用**

   - `BrowserRouter`を使用したルーティングのセットアップ
   - `Routes`と`Route`によるルート定義

2. **プログラマティックなナビゲーション**

   - `useNavigate()`フックを使用
   - ボタンクリックによる画面遷移の実装

3. **TypeScript の活用**
   - 型安全なコンポーネント実装
   - `React.FC`による関数コンポーネントの型定義

## 学習ポイント

1. **基本的なルーティング設定**

   ```tsx
   <BrowserRouter>
     <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
     </Routes>
   </BrowserRouter>
   ```

2. **useNavigate()フックの使用**
   ```tsx
   const navigate = useNavigate();
   // ページ遷移の実行
   navigate("/about");
   ```

## 注意点

- このプロジェクトは React Router v6 の基礎学習用です
- 実際のプロダクションでは、エラーハンドリングやローディング状態の管理なども考慮する必要があります

## 参考リンク

- [React Router 公式ドキュメント](https://reactrouter.com/)
- [React 公式ドキュメント](https://react.dev/)
- [TypeScript 公式ドキュメント](https://www.typescriptlang.org/)
