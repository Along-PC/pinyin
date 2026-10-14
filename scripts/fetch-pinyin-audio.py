"""从固定版本下载教学用单音节录音，文件及来源清单随项目发布。"""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import hashlib
import json
import urllib.request

REVISION = 'ff9ed3d0c631195bd2c06f39450f3264c7124040'
ROOT = Path(__file__).resolve().parents[1]
# 仅获取应用所需音节，四声文件保持原始内容，不裁剪或重合成。
SYLLABLES = 'bo po mo fo de te ne le ge ke he ji qi xi zhi chi shi ri zi ci si yi wu a o e yu ai ei wei ao ou you ye yue er an en yin wen yun ang eng ying dong yuan'.split()
DEST = ROOT / 'public/audio/pinyin'

def download(key):
    url = f'https://raw.githubusercontent.com/hugolpz/audio-cmn/{REVISION}/64k/syllabs/cmn-{key}.mp3'
    data = urllib.request.urlopen(url, timeout=30).read()
    if len(data) < 1000 or data[:1] == b'<':
        raise ValueError(f'录音文件无效：{key}')
    (DEST / f'{key}.mp3').write_bytes(data)
    return {'file': f'{key}.mp3', 'source': url, 'sha256': hashlib.sha256(data).hexdigest()}

if __name__ == '__main__':
    DEST.mkdir(parents=True, exist_ok=True)
    keys = sorted({f'{syllable}{tone}' for syllable in SYLLABLES for tone in range(1, 5)})
    with ThreadPoolExecutor(max_workers=8) as pool:
        files = list(pool.map(download, keys))
    (DEST / 'manifest.json').write_text(json.dumps({'revision': REVISION, 'speaker': 'Chen Wang', 'license': 'CC BY-SA（上游未注明版本）', 'files': files}, ensure_ascii=False, indent=2) + '\n')
    print(f'已下载 {len(files)} 个独立音节录音')
