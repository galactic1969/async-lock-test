# async-lock-test

async-lockのテスト用リポジトリ

## 実装したこと

HogeデバイスとFugaデバイス、ステータスの変更にHogeは100ms, Fugaは5000msかかる。
ステータス変更中はロックして、同じデバイスにリクエストがあったとしても、ロック解除まではリクエストを返さない。

### リクエスト例

```sh
# ロック効く
curl http://localhost:3000/devices/Hoge/poweron
curl http://localhost:3000/devices/Hoge/poweroff
curl http://localhost:3000/devices/Hoge/status

# ロック効かない
curl http://localhost:3000/devices/Fuga/poweron
curl http://localhost:3000/devices/Fuga/poweroff
curl http://localhost:3000/devices/Fuga/status

# ロック効く
curl http://localhost:3000/lockdevices/Fuga/poweron
curl http://localhost:3000/lockdevices/Fuga/poweroff
curl http://localhost:3000/lockdevices/Fuga/status
```

## 別ファイルでのロック

devices と devices2 という2つのRouteを作成し、それぞれ別のファイルで同じキーをロックした場合どうなるかと実験してみたが、別のファイルでのロックは干渉しなかった。
