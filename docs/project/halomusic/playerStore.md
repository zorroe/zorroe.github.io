# Store

>open in [github](https://github.com/zorroe/HaloMusic/blob/master/src/store/playerStore.ts)

## state

1. `audio`（播放器实例）
2. `songId`，当前播放的歌曲的id，
3. `cycleMode`，歌曲循环方式（顺序播放，随机播放，单曲循环）
4. `isFM`，是否私人FM
5. `volume`，音量大小
6. `playlist`，播放列表
7. `showPlayerPage`，是否打开歌词页面
8. `currentTime`，当前播放进度
9. `timer`，时间器，用来循环修改currentTime值
10. `paused`，是否暂停，保持和audio的paused属性一致
11. `lyricStr`，歌词字符串

## computed

1. `playlistCount`：播放列表长度
1. `current：{currentSong,idx}`，包含当前所播放的音乐及其所在歌单位置

## method

1. `initPlayer`：`() => {...}`初始化播放器
2. `pushSong2List`：`(songInfos: any[]) => {...}`把歌曲信息放到播放列表里面
3. `popSongFromList`：`(id: string) => {...}`歌曲无法播放时，将其从播放列表中取出
4. `playSong`：`(id: string, url: string) => {...}`播放歌曲
5. `getlyricStr`：`(id: string) => {...}`获取歌曲歌词
6. `playNext`：`() => {...}`播放下一首
7. `playPrev`：`() => {...}`播放上一首
8. `tooglePlay`：`() => {...}`暂停/继续播放
9. `playMulti`：`(ids: string) => {...}`播放多个
10. `playOne`：`(id: string, fm = false)`播放单个，不是私人fm的话，则会把isFm字段置为false
11. `playFm`：`() => {...}`播放私人FM
12. `openPlayerPage`：`() => {...}`打开歌词页面
13. `closePlayerPage`：`() => {...}`关闭歌词页面
14. `toggleLoop`：`() => {...}`切换循环方式
15. `setVolume`：`(n: number) => {...}`调节音量
16. `changeSlider`：`() => {...}`调节播放进度
17. `setPause`：`() => {...}`暂停播放

## listener

1. `ended`：在歌曲播放结束之后触发这个事件
2. `play`：播放时会将`paused`置为`false`
3. `pause`：暂停时会将`paused`置为`true`
