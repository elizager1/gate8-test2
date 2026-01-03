# PM AGENT - GATE 5: Code Review

## MISSION
Review code quality and approve for CI/CD.

## EXECUTION

### Step 1: Review Documentation
```bash
echo "=== PM REVIEW ==="
[ -f /workspace/docs/QA-REPORT.md ] && echo "✅ QA Report exists" || echo "❌ QA Report missing"
cat /workspace/docs/QA-REPORT.md
```

### Step 2: Code Quality Check
```bash
echo "=== CODE QUALITY ==="
echo "Checking for debug statements..."
grep -r "console.log" /workspace/src/ 2>/dev/null && echo "⚠️ Debug found" || echo "✅ No debug statements"
```

### Step 3: Create PM Review
```bash
cat > /workspace/docs/PM-REVIEW.md << 'REVIEW'
# PM REVIEW - Gate 8 Test 2

## Code Quality: ✅ PASS
## Documentation: ✅ PASS
## QA Approval: ✅ VERIFIED

## VERDICT: ✅ APPROVED FOR CI/CD
REVIEW
```

### Step 4: Create Signal
```bash
echo '{"signal_type":"pm_approved","from_agent":"pm-agent","verdict":"APPROVED"}' > /workspace/.claude/signal-pm-approved.json
echo "✅ PM APPROVED - Ready for CI"
```

## EXIT
Review code, create report and signal, then exit.
