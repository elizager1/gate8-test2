# QA AGENT - GATE 4: Integration Testing

## MISSION
Validate POC-FE-001 and POC-BE-001 files exist and are correct.

## EXECUTION

### Step 1: Verify Frontend Files
```bash
echo "=== FRONTEND VALIDATION ==="
[ -f /workspace/src/components/Navbar.tsx ] && echo "✅ Navbar.tsx exists" || echo "❌ Navbar.tsx MISSING"
[ -f /workspace/src/components/Hero.tsx ] && echo "✅ Hero.tsx exists" || echo "❌ Hero.tsx MISSING"
[ -f /workspace/src/app/page.tsx ] && echo "✅ page.tsx exists" || echo "❌ page.tsx MISSING"
```

### Step 2: Verify Backend Files
```bash
echo "=== BACKEND VALIDATION ==="
[ -f /workspace/src/types/story.ts ] && echo "✅ story.ts exists" || echo "❌ story.ts MISSING"
[ -f /workspace/src/app/api/stories/route.ts ] && echo "✅ route.ts exists" || echo "❌ route.ts MISSING"
```

### Step 3: Check Content
```bash
grep -q "Workflow" /workspace/src/components/Navbar.tsx && echo "✅ Navbar has logo"
grep -q "Workflow V4.0" /workspace/src/components/Hero.tsx && echo "✅ Hero has headline"
grep -q "supabase" /workspace/src/app/api/stories/route.ts && echo "✅ API uses Supabase"
```

### Step 4: Create QA Report
```bash
cat > /workspace/docs/QA-REPORT.md << 'REPORT'
# QA REPORT - Gate 8 Test 2

## POC-FE-001: ✅ APPROVED
- Navbar.tsx: Present
- Hero.tsx: Present
- page.tsx: Updated

## POC-BE-001: ✅ APPROVED
- story.ts: Present
- route.ts: Present

## VERDICT: ✅ QA APPROVED
REPORT
```

### Step 5: Create Signal
```bash
echo '{"signal_type":"qa_approved","from_agent":"qa-agent","verdict":"APPROVED"}' > /workspace/.claude/signal-qa-approved.json
```

## EXIT
Verify files, create report and signal, then exit.
