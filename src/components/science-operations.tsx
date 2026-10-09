import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { DialogDescription, DialogTitle } from "@/components/ui/dialog";
import collection from "@/data/operations.json";
import { promptByNo, type FolioPrompt } from "@/lib/folio";

export function ScienceOperations({ onChoose }: { onChoose: (prompt: FolioPrompt) => void }) {
  const [jobId, setJobId] = useState(collection.jobs[0].id);
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const copyRequest = useRef(0);
  useEffect(
    () => () => {
      copyRequest.current += 1;
    },
    [],
  );
  const job = collection.jobs.find((item) => item.id === jobId) ?? collection.jobs[0];
  const styles = job.styleNos.map((no) => ({
    prompt: promptByNo(no)!,
    guide: collection.styles.find((style) => style.no === no)!,
  }));

  const copyBrief = async () => {
    const request = ++copyRequest.current;
    const text = [
      `科普制作简报 · ${job.name}（编辑模板，非原始提示词）`,
      "本期选题：【填写读者问题】",
      ...job.inputs.map((input) => `${input}：【填写已核实内容】`),
      `画面安排：${job.instructions}`,
      `系列一致性：${job.continuity}`,
      "参考风格编号：【填写 FOLIO 编号；另行复制该条原始提示词】",
      "资料出处：【填写链接或文献】",
    ].join("\n");
    try {
      await navigator.clipboard.writeText(text);
      if (request === copyRequest.current) {
        setCopied(true);
        setCopyError(false);
      }
    } catch {
      if (request === copyRequest.current) {
        setCopied(false);
        setCopyError(true);
      }
    }
  };

  return (
    <>
      <header className="science-heading">
        <p className="science-eyebrow">泛知识／科普账号 · {collection.styles.length} 种已有风格</p>
        <DialogTitle>这一期，你要用画面讲什么？</DialogTitle>
        <DialogDescription>{collection.description}</DialogDescription>
      </header>
      <nav className="science-jobs" aria-label="科普生产用途">
        {collection.jobs.map((item) => (
          <button
            key={item.id}
            aria-pressed={job.id === item.id}
            className={job.id === item.id ? "is-active" : ""}
            onClick={() => {
              copyRequest.current += 1;
              setJobId(item.id);
              setCopied(false);
              setCopyError(false);
            }}
          >
            {item.name}
          </button>
        ))}
      </nav>
      <section className="science-brief" aria-label={`${job.name}制作简报`}>
        <div className="science-brief-top">
          <div>
            <h3>{job.name}</h3>
            <p>{job.outcome}</p>
          </div>
          <button className="outline-button" onClick={() => void copyBrief()}>
            {copied ? <Check /> : <Copy />}
            {copied ? "已复制简报" : "复制制作简报"}
          </button>
        </div>
        <p className="science-example">
          <span>选题示例</span>
          {job.example}
        </p>
        <dl>
          <div>
            <dt>先准备</dt>
            <dd>{job.inputs.join("、")}</dd>
          </div>
          <div>
            <dt>怎样画</dt>
            <dd>{job.instructions}</dd>
          </div>
          <div>
            <dt>系列复用</dt>
            <dd>{job.continuity}</dd>
          </div>
        </dl>
        <p className="science-copy-status" role="status">
          {copyError
            ? "复制失败，请检查浏览器剪贴板权限后重试。"
            : copied
              ? "已复制编辑制作简报；原始提示词可从下方风格详情复制。"
              : "示例是制作选题；知识结论需依据资料审定。"}
        </p>
      </section>
      <section className="science-style-section" aria-label="推荐画风">
        <h3>选择画风，查看原始提示词</h3>
        <div className="science-styles">
          {styles.map(({ prompt, guide }) => (
            <button
              className="science-style"
              key={prompt.no}
              onClick={() => onChoose(prompt)}
              aria-label={`查看科普风格 ${prompt.no} ${guide.name}`}
            >
              <img src={prompt.covers[0]} alt={prompt.title} loading="lazy" />
              <div>
                <span className="science-style-no">{prompt.no}</span>
                <h4>
                  {guide.name}
                  <ArrowUpRight />
                </h4>
                <p>{guide.fit}</p>
                <p className="science-reuse">{guide.reuse}</p>
              </div>
            </button>
          ))}
        </div>
      </section>
      <section className="science-references" aria-label="账号参考">
        <h3>账号参考：借鉴怎样讲知识</h3>
        <p>{collection.provenance}</p>
        <div>
          {collection.references.map((reference) => (
            <article key={reference.name}>
              <a href={reference.url} target="_blank" rel="noreferrer">
                {reference.name}
                <ArrowUpRight />
              </a>
              <small>{reference.sourceType}</small>
              <p>{reference.takeaway}</p>
              <p>{reference.apply}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
