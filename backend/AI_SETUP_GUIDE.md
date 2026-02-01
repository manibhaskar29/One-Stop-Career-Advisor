# Google Gemini AI Setup Guide

## 🎯 Getting Your Free API Key

1. **Visit Google AI Studio**
   - Go to: https://makersuite.google.com/app/apikey
   - Sign in with your Google account

2. **Create API Key**
   - Click "Create API Key"
   - Select "Create API key in new project" or use existing project
   - Copy the generated API key

3. **Add to Backend .env**
   - Open `backend/.env` file (create if doesn't exist)
   - Add this line:
     ```
     GEMINI_API_KEY=your-api-key-here
     ```
   - Replace `your-api-key-here` with your actual API key

## 🚀 Testing the AI Integration

### Step 1: Restart Backend Server
```bash
cd backend
npm run dev
```

### Step 2: Test the API Endpoint
Open browser and visit:
```
http://localhost:5000/api/quiz/test
```

You should see:
```json
{
  "success": true,
  "message": "Quiz API is working!",
  "geminiConfigured": true
}
```

### Step 3: Take the Quiz
1. Open frontend: http://localhost:5173
2. Login as a student
3. Go to Dashboard → Take Quiz
4. Select student type (After 10th or After 12th)
5. Answer all 22 questions
6. Watch the AI analysis screen!
7. View personalized recommendations

## 📊 What the AI Does

1. **Calculates Category Scores**
   - Maps your 22 answers to 6 career categories
   - STEM, Medical, Commerce, Arts, Creative, Technical
   - Uses weighted scoring algorithm

2. **Generates Personalized Recommendations**
   - Sends scores + constraints to Gemini AI
   - AI analyzes your unique profile
   - Returns 5-7 career recommendations with:
     - Match score (85-99%)
     - Personalized reasoning
     - Degree requirements
     - Salary ranges
     - Action steps

3. **Provides Overall Analysis**
   - Stream recommendation (Science/Commerce/Arts)
   - Overall profile summary
   - Category scores breakdown

## 🔧 Troubleshooting

**If `geminiConfigured: false`:**
- Check if GEMINI_API_KEY is in .env file
- Restart backend server after adding key
- Make sure there are no spaces around the equals sign

**If AI analysis fails:**
- Check backend console for error messages
- Verify API key is valid
- Check internet connection
- System will use fallback and show static careers

**If frontend doesn't call API:**
- Check browser console for errors
- Verify backend is running on port 5000
- Check CORS settings if needed

## 💰 Free Tier Limits

- **60 requests per minute** (very generous!)
- **1,500 requests per day**
- Perfect for development and testing
- Upgrade to paid only if you scale to production

## 🎓 Interview Talking Points

*"I implemented a hybrid AI recommendation engine that combines rule-based scoring for efficiency with Google Gemini API for personalized insights. The system maps 22 assessment questions to 6 career categories using a weighted algorithm, then leverages generative AI to provide contextual reasoning and actionable career guidance."*

This demonstrates:
- AI/LLM integration skills
- API design and error handling
- Cost-conscious architecture (hybrid approach)
- User experience optimization (loading states, fallbacks)
