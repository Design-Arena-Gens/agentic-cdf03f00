'use client'

import { useState } from 'react'

interface FormData {
  topic: string
  field: string
  context: string
  gap: string
  objectives: string
}

interface Result {
  introduction: string
  problemStatement: string
  justification: string
  questions: string[]
  hypotheses: string[]
  objectives: string[]
  methodology: string
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    topic: '',
    field: '',
    context: '',
    gap: '',
    objectives: ''
  })

  const [result, setResult] = useState<Result | null>(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const generateProblemFormulation = () => {
    setLoading(true)

    // Simulate API call with realistic academic content
    setTimeout(() => {
      const generated: Result = {
        introduction: `يُعدّ موضوع "${formData.topic}" من المواضيع المحورية في مجال ${formData.field}، حيث يحظى باهتمام متزايد من قبل الباحثين والممارسين على حدٍّ سواء. في ظل ${formData.context}، تبرز الحاجة الملحّة لفهم أعمق لهذه الظاهرة وتداعياتها المختلفة. تشير الأدبيات العلمية الحديثة إلى وجود فجوات معرفية كبيرة في هذا المجال، مما يستدعي إجراء دراسات معمّقة وشاملة.`,

        problemStatement: `تتمحور الإشكالية الأساسية لهذا البحث حول ${formData.gap}. على الرغم من الجهود البحثية المبذولة في السنوات الأخيرة، لا تزال هناك ثغرات معرفية كبيرة تحتاج إلى معالجة منهجية ودقيقة. يسعى هذا البحث إلى سد هذه الفجوة من خلال ${formData.objectives}، وذلك بهدف الإسهام في تطوير المعرفة النظرية والتطبيقية في هذا المجال.`,

        justification: `تكتسب هذه الدراسة أهميتها من عدة جوانب: (1) الأهمية النظرية: حيث تساهم في إثراء الأدبيات العلمية المتعلقة بـ${formData.topic} وتوسيع نطاق الفهم الأكاديمي لهذه الظاهرة، (2) الأهمية التطبيقية: من خلال تقديم نتائج قابلة للتطبيق في ${formData.field}، (3) الأهمية المنهجية: عبر اقتراح مقاربات بحثية جديدة يمكن أن تفيد الباحثين المستقبليين، (4) الأهمية المجتمعية: بتوفير معرفة قد تساعد في تحسين الممارسات والسياسات ذات الصلة.`,

        questions: [
          `ما هي الأبعاد الرئيسية لـ${formData.topic} في سياق ${formData.field}؟`,
          `كيف يمكن تفسير العلاقة بين المتغيرات المختلفة المرتبطة بـ${formData.topic}؟`,
          `ما هي العوامل المؤثرة في تشكيل وتطور ${formData.topic}؟`,
          `إلى أي مدى يمكن تعميم النتائج المتعلقة بـ${formData.topic} في سياقات مختلفة؟`,
          `ما هي الآليات الكامنة وراء الظواهر المرتبطة بـ${formData.topic}؟`
        ],

        hypotheses: [
          `توجد علاقة ذات دلالة إحصائية بين ${formData.topic} والمتغيرات المستقلة المدروسة`,
          `تختلف تجليات ${formData.topic} باختلاف السياقات والمجالات المدروسة`,
          `يمكن تطوير نموذج نظري شامل يفسر ديناميكيات ${formData.topic}`,
          `تساهم العوامل السياقية بشكل كبير في تشكيل ${formData.topic}`,
          `يمكن أن تؤدي التدخلات المقترحة إلى تحسين الممارسات المتعلقة بـ${formData.topic}`
        ],

        objectives: [
          `تحليل الأبعاد المفاهيمية والنظرية لـ${formData.topic}`,
          `استقصاء العلاقات السببية والارتباطية بين المتغيرات الرئيسية`,
          `تطوير إطار نظري متكامل لفهم ${formData.topic}`,
          `اقتراح توصيات عملية قابلة للتطبيق في ${formData.field}`,
          `المساهمة في سد الفجوة المعرفية القائمة في الأدبيات العلمية`
        ],

        methodology: `تعتمد هذه الدراسة على منهج بحثي مختلط يجمع بين المقاربات الكمية والنوعية، بهدف الحصول على فهم شامل ومتعمق للإشكالية المطروحة. سيتم استخدام عدة أدوات بحثية منها: (1) المراجعة النظرية المنهجية للأدبيات السابقة، (2) الدراسة الميدانية باستخدام الاستبيانات والمقابلات المعمقة، (3) التحليل الإحصائي للبيانات الكمية، (4) التحليل الموضوعي للبيانات النوعية. سيتم اختيار العينة بطريقة ${formData.field.includes('اجتماع') ? 'عشوائية طبقية' : 'قصدية'} لضمان تمثيلية النتائج وإمكانية تعميمها.`
      }

      setResult(generated)
      setLoading(false)
    }, 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    generateProblemFormulation()
  }

  return (
    <div className="container">
      <div className="header">
        <h1>🎓 أداة صياغة الإشكاليات العلمية</h1>
        <p>منصة أكاديمية متخصصة لصياغة الإشكاليات البحثية بطريقة منهجية احترافية</p>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="topic">موضوع البحث *</label>
            <input
              type="text"
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              placeholder="مثال: تأثير التكنولوجيا الرقمية على التعليم العالي"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="field">المجال العلمي *</label>
            <select
              id="field"
              name="field"
              value={formData.field}
              onChange={handleChange}
              required
            >
              <option value="">اختر المجال العلمي</option>
              <option value="علوم التربية">علوم التربية</option>
              <option value="علم النفس">علم النفس</option>
              <option value="علم الاجتماع">علم الاجتماع</option>
              <option value="الإدارة والاقتصاد">الإدارة والاقتصاد</option>
              <option value="العلوم السياسية">العلوم السياسية</option>
              <option value="العلوم القانونية">العلوم القانونية</option>
              <option value="الإعلام والاتصال">الإعلام والاتصال</option>
              <option value="العلوم الصحية">العلوم الصحية</option>
              <option value="الآداب واللغات">الآداب واللغات</option>
              <option value="العلوم الدقيقة">العلوم الدقيقة</option>
            </select>
          </div>

          <div className="input-group">
            <label htmlFor="context">السياق العام للبحث *</label>
            <textarea
              id="context"
              name="context"
              value={formData.context}
              onChange={handleChange}
              placeholder="صف السياق العام والظروف المحيطة بموضوع البحث..."
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="gap">الفجوة المعرفية أو المشكلة البحثية *</label>
            <textarea
              id="gap"
              name="gap"
              value={formData.gap}
              onChange={handleChange}
              placeholder="ما هي الفجوة المعرفية أو المشكلة التي تحاول معالجتها؟"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="objectives">الأهداف الأولية للبحث *</label>
            <textarea
              id="objectives"
              name="objectives"
              value={formData.objectives}
              onChange={handleChange}
              placeholder="ما الذي تسعى لتحقيقه من خلال هذا البحث؟"
              required
            />
          </div>

          <button type="submit" className="button" disabled={loading}>
            {loading ? 'جارٍ الصياغة...' : '🚀 صياغة الإشكالية'}
          </button>
        </form>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>جارٍ صياغة الإشكالية بطريقة منهجية أكاديمية...</p>
          </div>
        )}

        {result && !loading && (
          <div className="result">
            <h2>📋 الإشكالية المصاغة</h2>

            <div className="result-section">
              <h3>🔍 المقدمة والسياق</h3>
              <p>{result.introduction}</p>
            </div>

            <div className="result-section">
              <h3>❓ صياغة الإشكالية</h3>
              <p>{result.problemStatement}</p>
            </div>

            <div className="result-section">
              <h3>💡 أهمية البحث ومبرراته</h3>
              <p>{result.justification}</p>
            </div>

            <div className="result-section">
              <h3>🎯 أسئلة البحث</h3>
              <ul>
                {result.questions.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </div>

            <div className="result-section">
              <h3>🔬 الفرضيات البحثية</h3>
              <ul>
                {result.hypotheses.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="result-section">
              <h3>🎓 أهداف البحث</h3>
              <ul>
                {result.objectives.map((o, i) => (
                  <li key={i}>{o}</li>
                ))}
              </ul>
            </div>

            <div className="result-section">
              <h3>📊 المنهجية المقترحة</h3>
              <p>{result.methodology}</p>
            </div>
          </div>
        )}
      </div>

      <div className="card info-box">
        <h3>📌 إرشادات استخدام الأداة</h3>
        <p>
          هذه الأداة مصممة لمساعدة الباحثين في صياغة إشكالياتهم البحثية بطريقة منهجية أكاديمية.
          يُنصح بمراجعة النتائج وتخصيصها بما يتناسب مع متطلبات بحثك الخاص والمعايير الأكاديمية لمؤسستك.
        </p>

        <div className="steps-list">
          <div className="step">
            <span className="step-number">1</span>
            <strong>حدد موضوع بحثك بدقة</strong>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <strong>اختر المجال العلمي المناسب</strong>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <strong>اشرح السياق والفجوة المعرفية</strong>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <strong>راجع النتائج وخصصها حسب حاجتك</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
