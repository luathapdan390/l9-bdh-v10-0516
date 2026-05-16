import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, XCircle, ChevronRight, BookOpen, GraduationCap, RefreshCcw, Info, Settings2 } from 'lucide-react';
import { PASSAGE, QUESTIONS } from './constants';

export default function App() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({});

  const score = useMemo(() => {
    return QUESTIONS.reduce((acc, q) => {
      return acc + (selectedAnswers[q.id] === q.correctAnswer ? 1 : 0);
    }, 0);
  }, [selectedAnswers]);

  const handleSelect = (questionId: number, optionKey: string) => {
    if (submitted) return;
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionKey }));
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length < QUESTIONS.length) {
      if (!confirm('You haven\'t answered all questions. Submit anyway?')) return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setShowExplanations({});
  };

  const toggleExplanation = (questionId: number) => {
    setShowExplanations(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-600 rounded-lg text-white">
              <BookOpen size={20} />
            </div>
            <h1 className="font-bold text-xl tracking-tight hidden sm:block">English Reading Mastery</h1>
            <h1 className="font-bold text-xl tracking-tight sm:hidden">Reading Task</h1>
          </div>
          
          <div className="flex items-center gap-4">
            {submitted && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-indigo-50 px-3 py-1.5 rounded-full border border-indigo-100"
              >
                <GraduationCap className="text-indigo-600" size={18} />
                <span className="font-semibold text-indigo-700">
                  Score: {score}/{QUESTIONS.length}
                </span>
              </motion.div>
            )}
            <button 
              onClick={handleReset}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
              title="Reset Test"
            >
              <RefreshCcw size={20} />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Passage */}
          <section className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8"
            >
              <div className="inline-flex items-center gap-2 text-indigo-600 font-semibold mb-4 bg-indigo-50 px-3 py-1 rounded-full text-sm">
                <Info size={14} />
                Reading Passage
              </div>
              <h2 className="text-2xl font-bold mb-6 text-slate-900">{PASSAGE.title}</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                {PASSAGE.content.map((para, i) => (
                  <p key={i} className="first-letter:text-3xl first-letter:font-bold first-letter:text-indigo-600 first-letter:mr-1">
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Right Column: Questions */}
          <section className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
              <Settings2 size={14} />
              Multiple Choice Questions
            </h3>
            
            {QUESTIONS.map((q, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`group bg-white rounded-2xl p-6 border transition-all duration-300 ${
                  submitted 
                    ? selectedAnswers[q.id] === q.correctAnswer
                      ? 'border-emerald-200 bg-emerald-50/10'
                      : selectedAnswers[q.id] 
                        ? 'border-rose-200 bg-rose-50/10' 
                        : 'border-slate-200'
                    : 'border-slate-200 hover:border-indigo-200 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-500 text-sm">
                    {q.id}
                  </span>
                  <p className="font-semibold text-lg text-slate-800 pt-0.5">{q.text}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-0 sm:pl-12">
                  {q.options.map((opt) => {
                    const isSelected = selectedAnswers[q.id] === opt.key;
                    const isCorrect = opt.key === q.correctAnswer;
                    
                    return (
                      <button
                        key={opt.key}
                        disabled={submitted}
                        onClick={() => handleSelect(q.id, opt.key)}
                        className={`text-left p-3 rounded-xl border-2 transition-all flex items-center gap-3 relative overflow-hidden group/btn ${
                          submitted
                            ? isCorrect
                              ? 'border-emerald-500 bg-emerald-50 text-emerald-900 group/ans'
                              : isSelected
                                ? 'border-rose-500 bg-rose-50 text-rose-900'
                                : 'border-slate-100 opacity-50'
                            : isSelected
                              ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                              : 'border-slate-100 hover:border-slate-300 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded flex items-center justify-center text-xs font-bold ${
                           submitted
                           ? isCorrect
                             ? 'bg-emerald-500 text-white'
                             : isSelected
                               ? 'bg-rose-500 text-white'
                               : 'bg-slate-200 text-slate-500'
                           : isSelected
                             ? 'bg-indigo-600 text-white'
                             : 'bg-slate-200 text-slate-500 group-hover/btn:bg-slate-300'
                        }`}>
                          {opt.key}
                        </span>
                        <span className="flex-1 font-medium">{opt.text}</span>
                        {submitted && isCorrect && <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0" />}
                        {submitted && isSelected && !isCorrect && <XCircle size={16} className="text-rose-600 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation Area */}
                {submitted && (
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <button
                      onClick={() => toggleExplanation(q.id)}
                      className="text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1 group/toggle"
                    >
                      <ChevronRight size={16} className={`transition-transform duration-300 ${showExplanations[q.id] ? 'rotate-90' : ''}`} />
                      View Explanation & Evidence
                    </button>
                    
                    <AnimatePresence>
                      {showExplanations[q.id] && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 p-4 rounded-xl bg-slate-50 space-y-3">
                            <div>
                              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Explanation</p>
                              <p className="text-slate-700 font-medium">{q.explanation}</p>
                            </div>
                            <div className="pt-2 border-t border-slate-200 italic">
                              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Evidence</p>
                              <p className="text-slate-600 text-sm">"{q.evidence}"</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </motion.div>
            ))}

            {!submitted ? (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSubmit}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-indigo-100 transition-all flex items-center justify-center gap-2 mt-8"
              >
                Submit Answers
                <ChevronRight size={20} />
              </motion.button>
            ) : (
              <div className="text-center p-8 mt-8 rounded-2xl bg-indigo-50 border border-indigo-100">
                <p className="text-lg font-semibold text-indigo-900 mb-2">Great job completing the task!</p>
                <p className="text-indigo-600 mb-4 text-sm">Review your results and the detailed explanations above to sharpen your skills.</p>
                <button 
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 bg-white px-6 py-2.5 rounded-full font-bold text-indigo-600 border border-indigo-200 hover:bg-indigo-600 hover:text-white transition-all shadow-sm"
                >
                  Try Again
                  <RefreshCcw size={18} />
                </button>
              </div>
            )}
          </section>
        </div>
      </main>

      <footer className="mt-12 py-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
            Made for English Learners & Educators <GraduationCap size={14} />
          </p>
        </div>
      </footer>
    </div>
  );
}

