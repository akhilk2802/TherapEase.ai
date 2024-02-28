# Summarization - BART

from transformers import pipeline

def Bart_Model(json_data):

    # Concatenate all answer values
    concatenated_answers = ' '.join(entry['answer'] for entry in json_data)

    summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

#     ARTICLE = """
#     The patient often has headaches.The patient's appetite is poor. The patient's sleep quality is good.The patient is easily frightened. The patient's hands shake.
#     The patient feels nervous, tense, or worried. The patient doesn't have digestive issues.The patient's thinking is often foggy.
#     """
    
    summary = summarizer(concatenated_answers, max_length=100, min_length=30, do_sample=False)
    return summary[0]['summary_text']

ARTICLE = """ 
The patient often has headaches.The patient's appetite is poor. The patient's sleep quality is good.The patient is easily frightened. The patient's hands shake.
The patient feels nervous, tense, or worried. The patient doesn't have digestive issues.The patient's thinking is often foggy.
"""

# Call Function 
# Bart_Model()